import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactFormProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  services?: string
  budget?: string
  timeline?: string
  message?: string
}

function ContactFormEmail({
  name = '—',
  email = '—',
  phone,
  company,
  services = '—',
  budget = '—',
  timeline = '—',
  message,
}: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>Cerere ofertă nouă de la {name}</Preview>
      <Body style={{ backgroundColor: '#0a0a0f', fontFamily: 'system-ui, sans-serif', margin: 0, padding: '24px' }}>
        <Container style={{ maxWidth: 560, margin: '0 auto', backgroundColor: '#13131a', borderRadius: 16, padding: 32, color: '#e5e5ea' }}>
          <Heading style={{ color: '#fff', fontSize: 22, marginTop: 0 }}>Cerere ofertă nouă</Heading>
          <Text style={{ color: '#a1a1aa', fontSize: 14 }}>Un client a completat formularul pe site.</Text>

          <Hr style={{ borderColor: '#27272a', margin: '20px 0' }} />

          <Section>
            <Row label="Nume" value={name} />
            <Row label="Email" value={email} />
            {phone && <Row label="Telefon" value={phone} />}
            {company && <Row label="Companie" value={company} />}
          </Section>

          <Hr style={{ borderColor: '#27272a', margin: '20px 0' }} />

          <Section>
            <Row label="Servicii" value={services} />
            <Row label="Buget" value={budget} />
            <Row label="Timeline" value={timeline} />
          </Section>

          {message && (
            <>
              <Hr style={{ borderColor: '#27272a', margin: '20px 0' }} />
              <Section>
                <Text style={{ color: '#a1a1aa', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>Mesaj</Text>
                <Text style={{ color: '#fff', fontSize: 14, whiteSpace: 'pre-wrap', marginTop: 6 }}>{message}</Text>
              </Section>
            </>
          )}

          <Hr style={{ borderColor: '#27272a', margin: '24px 0 12px' }} />
          <Text style={{ color: '#71717a', fontSize: 12, margin: 0 }}>
            Răspunde direct la {email} pentru a continua conversația.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <Text style={{ color: '#a1a1aa', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>{label}</Text>
      <Text style={{ color: '#fff', fontSize: 14, margin: '2px 0 0' }}>{value}</Text>
    </div>
  )
}

export const template = {
  component: ContactFormEmail,
  subject: (data: Record<string, any>) => `Cerere ofertă — ${data.name || 'Client nou'}`,
  displayName: 'Cerere ofertă',
  to: 'contact@noxaweb.com',
  previewData: {
    name: 'Ion Popescu',
    email: 'ion@example.com',
    phone: '+40 700 000 000',
    company: 'Acme SRL',
    services: 'Website prezentare, Branding & identitate',
    budget: '€1.000 – €3.000',
    timeline: 'În 2-4 săptămâni',
    message: 'Avem nevoie de un site nou pentru cabinetul nostru.',
  },
} satisfies TemplateEntry
