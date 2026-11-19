import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

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

        const { sendTemplateEmail } = await import('@/lib/email-templates/send-email')
        const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
        const db = supabaseAdmin as any
        const { TEMPLATES } = await import('@/lib/email-templates/registry')
        const recipient = TEMPLATES['contact-form'].to!
        const submissionId = crypto.randomUUID()

        const log = async (row: Record<string, unknown>) => {
          const { error } = await db.from('email_send_log').insert({
            message_id: null,
            template_name: 'contact-form',
            recipient_email: recipient,
            ...row,
          })
          if (error) console.error('contact-form send log failed', { code: error.code, message: error.message })
        }

        try {
          const result = await sendTemplateEmail('contact-form', recipient, {
            templateData: data,
            idempotencyKey: `contact-form-${submissionId}`,
            replyTo: data.email,
          })
          if (result.sent) {
            await log({ status: 'sent' })
          } else {
            await log({ status: 'suppressed' })
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          console.error('contact-form send failed', message)
          await log({ status: 'failed', error_message: message })
          return Response.json({ error: 'Failed to send' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
