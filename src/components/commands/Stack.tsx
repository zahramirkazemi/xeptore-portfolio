import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

export default function Stack() {
  const loop = [...CV.stack, ...CV.stack]
  return (
    <>
      <Section tag="stack" fig="FIG. 04 — tools & technologies" />
      <div className="marquee" aria-label="Technology stack">
        <div className="marquee-track" aria-hidden="true">
          {loop.map((technology, i) => (
            <span className="marquee-item" key={i}>
              <span className="dot">▘</span>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
