import { HINTS } from '../../core/constants.ts'
import { CV } from '../../core/data.ts'

export default function Hero() {
  return (
    <div className="hero">
      <div className="wm" aria-label={`${CV.handle} — terminal portfolio`}>
        <span className="caret" aria-hidden="true">$ </span>
        {CV.handle}
      </div>
      <div className="sub">
        <b>{CV.name}</b> &nbsp;·&nbsp; {CV.title} &nbsp;·&nbsp; {CV.location}
      </div>
      <div className="tag2">{CV.tagline}</div>
      <div className="id-row">
        <span className="faint">// type a command, or click below</span>
      </div>
      <nav className="hints" aria-label="Quick navigation">
        {HINTS.map(([command, description]) => (
          <button className="hint-chip" key={command} aria-label={`Run ${command}: ${description}`}>
            <span className="k">{command}</span> <span className="faint">— {description}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
