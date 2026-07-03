import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

export default function About() {
  return (
    <>
      <Section tag="about" fig="FIG. 00 — whoami" />
      <p className="lead">{CV.blurb}</p>
      <div style={{ marginTop: 16 }} className="kv">
        <span className="k">name</span>
        <span className="hl">{CV.name}</span>
        <span className="k">role</span>
        <span className="muted">{CV.title}</span>
        <span className="k">focus</span>
        <span className="muted">Backend architecture · Go · distributed systems · observability</span>
        <span className="k">based</span>
        <span className="muted">{CV.location}</span>
        <span className="k">langs</span>
        <span className="muted">{CV.languages.map((l) => `${l.lang} (${l.level})`).join(' · ')}</span>
      </div>
    </>
  )
}
