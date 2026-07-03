import { CV } from '../../core/data.ts'
import { Section } from '../Shared.tsx'

function langLevel(level: string) {
  return level === 'Native' ? 5 : 4
}

export default function Education() {
  return (
    <>
      <Section tag="education" fig="FIG. 05" />
      <div className="edu">
        {CV.education.map((e, i) => (
          <div className="row" key={i}>
            <div>
              <h3>{e.degree}</h3>
              <div className="school">{e.school}</div>
              <div className="place">{e.place}</div>
            </div>
            <div className="when">{e.period}</div>
          </div>
        ))}
      </div>
      <div className="langs" aria-label="Languages">
        {CV.languages.map((l, i) => (
          <div className="lang" key={i}>
            <span className="nm">{l.lang}</span>
            <span className="lvl">{l.level}</span>
            <span className="bar" aria-label={`${l.level} proficiency`}>
              {[0, 1, 2, 3, 4].map((n) => (
                <i key={n} className={n < langLevel(l.level) ? 'on' : ''} />
              ))}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
