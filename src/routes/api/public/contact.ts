import * as React from 'react'
import { renderAsync } from '@react-email/components'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { supabaseAdmin } from '@/integrations/supabase/client.server'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'NOXA Agency'
const SENDER_DOMAIN = 'notify.noxaweb.com'
const FROM_DOMAIN = 'noxaweb.com'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  services: z.string().trim().min(1).max(500),
  budget: z.string().trim().min(1).max(80),
  timeline: z.string().trim().min(1).max(80),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
})

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = ContactSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json({ error: 'Invalid input' }, { status: 400 })
        }
        const data = parsed.data

        const template = TEMPLATES['contact-form']
        const recipient = template.to!
        const messageId = crypto.randomUUID()

        const element = React.createElement(template.component, data)
        const html = await renderAsync(element)
        const text = await renderAsync(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(data)
            : template.subject

        await supabaseAdmin.from('email_send_log').insert({
          message_id: messageId,
          template_name: 'contact-form',
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabaseAdmin.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            reply_to: data.email,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text,
            purpose: 'transactional',
            label: 'contact-form',
            idempotency_key: messageId,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('contact-form enqueue failed', enqueueError)
          await supabaseAdmin.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'contact-form',
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue',
          })
          return Response.json({ error: 'Failed to send' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
