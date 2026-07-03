import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

export default function Contact() {
  const c = CV.contact
  return (
    <>
      <Section tag="contact" fig="FIG. 06 — open a channel" />
      <div className="contact">
        <a href={`mailto:${c.email}`} aria-label={`Send email to ${c.email}`}>
          <span className="lbl">email</span>
          <span className="val">{c.email}</span>
          <span className="arr" aria-hidden="true">↗</span>
        </a>
        <a href={c.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <span className="lbl">github</span>
          <span className="val">{c.github}</span>
          <span className="arr" aria-hidden="true">↗</span>
        </a>
        <a
          href={`tel:${c.phone.replace(/[^+\d]/g, '')}`}
          aria-label={`Call ${c.phone}`}
        >
          <span className="lbl">phone</span>
          <span className="val">{c.phone}</span>
          <span className="arr" aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  )
}
