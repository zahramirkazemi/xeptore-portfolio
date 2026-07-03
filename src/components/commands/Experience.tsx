import { CV } from '../../core/data.ts'
import type { ExperienceEntry } from '../../core/data.ts'
import { Section, Chips } from '../Shared.tsx'

function Job({ j }: { j: ExperienceEntry }) {
  const ul = (
    <ul>
      {j.bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  )

  return (
    <div className={'job' + (j.current ? ' cur' : '')}>
      <span className="node" aria-hidden="true" />
      <div className="when">{j.period}</div>
      <h3>
        {j.role} <span className="co">@ {j.company}</span>
      </h3>
      {ul}
      <Chips items={j.stack} />
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <Section tag="experience" fig={`FIG. 02 — timeline view · ${CV.experience.length} entries`} />
      <div className="exp-list v-timeline">
        {CV.experience.map((j, i) => (
          <Job key={i} j={j} />
        ))}
      </div>
    </>
  )
}
