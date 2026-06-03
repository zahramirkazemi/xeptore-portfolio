import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

export default function Skills() {
  return (
    <>
      <Section tag="skills" fig="FIG. 03 — capabilities" />
      <div className="skills">
        {CV.skills.map((skillGroup, i) => (
          <div className="skill" key={i}>
            <h4>{skillGroup.group}</h4>
            <ul>
              {skillGroup.items.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
