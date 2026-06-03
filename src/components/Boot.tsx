import { BOOT_LINES } from '../core/constants.ts';

export default function Boot({ booting, bootShown }: { booting: boolean, bootShown: number }) {
  return booting && (
    <div className="block" style={{ animation: 'none' }} aria-label="Boot sequence">
      {BOOT_LINES.slice(0, bootShown).map((l, i) => (
        <div key={i} className="dim" style={{ lineHeight: 1.8 }}>
          <span className="faint">{String(i + 1).padStart(2, '0')}</span>&nbsp;&nbsp;{l}
        </div>
      ))}
      {bootShown < BOOT_LINES.length && (
        <span className="dim" aria-hidden="true">
          ▌
        </span>
      )}
    </div>
  )
}
