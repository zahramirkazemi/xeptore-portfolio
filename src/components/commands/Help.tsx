import { Fragment } from 'react'
import { ROWS } from '../../core/constants.ts';
import { Section } from '../Shared.tsx';

export default function Help() {
  return (
    <>
      <Section tag="help" fig="available commands" />
      <div className="help-grid" role="list" aria-label="Available commands">
        {ROWS.map(([command, description]) => (
          <Fragment key={command}>
            <span className="c" role="listitem">
              {command}
            </span>
            <span className="muted">{description}</span>
          </Fragment>
        ))}
      </div>
      <p className="faint" style={{ marginTop: 16 }}>
        ↑ / ↓ recall history · Tab autocompletes · Esc clears the line
      </p>
    </>
  )
}
