import { CV } from '../core/data.ts'

export default function Terminal() {
  return (
    <div
      className="screen"
      style={{ fontSize: '14px' }}
      role="application"
      aria-label="Terminal portfolio"
    >
      <div className="frame">

        {/* Title bar */}
        <div className="titlebar" aria-label="Terminal title bar">
          <span className="tb-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="tb-path">
            {CV.handle}@portfolio: <b>~/session</b>
          </span>
          <span className="tb-spacer" />
          <span className="tb-stat">
            exp:<b>timeline</b>
          </span>
          <span className="tb-live" aria-label="Status: online">
            online
          </span>
        </div>
      </div>
    </div>

  )
}
