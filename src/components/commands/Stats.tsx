import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

export default function Stats() {
  return (
    <>
      <Section tag="stats" fig="FIG. 01" />
      <div className="stats" role="list" aria-label="Statistics">
        {CV.stats.map((stat, i) => (
          <div className="stat" key={i} role="listitem">
            <div className="v">{stat.v}</div>
            <div className="k">{stat.k}</div>
          </div>
        ))}
      </div>
    </>
  )
}
