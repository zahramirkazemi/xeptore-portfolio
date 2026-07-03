import { useEffect, useRef, useState } from 'react';

import { CV } from '../core/data.ts'
import { BOOT_LINES } from '../core/constants.ts';

import BootLoading from './BootLoading.tsx';

interface Block {
  id: number
  cmd: string
  render: (ctx: { onRun: (cmd: string) => void }) => React.ReactNode
}

export default function MainContent({ blocks, focusInput, run }: { blocks: Block[], focusInput: () => void, run: (cmd: string) => void }) {
  const [booting, setBooting] = useState(true)
  const [bootShown, setBootShown] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)

  // boot sequence
  useEffect(() => {
    if (bootShown >= BOOT_LINES.length) {
      const id = setTimeout(() => setBooting(false), 420)
      return () => clearTimeout(id)
    }
    const id = setTimeout(
      () => {
        setBootShown((n) => n + 1)
      },
      260,
    )
    return () => clearTimeout(id)
  }, [booting, bootShown])

  return (
    <div
      className="viewport"
      onClick={focusInput}
      ref={viewportRef}
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
    >
      <BootLoading booting={booting} bootShown={bootShown} />

      {blocks.map((b) => (
        <div className="block" key={b.id}>
          {b.cmd ? (
            <div className="echo" aria-label={`Command: ${b.cmd}`}>
              <span className="pr">
                {CV.handle}
                <span className="faint"> ~ </span>$
              </span>
              <span className="cmd">{b.cmd}</span>
            </div>
          ) : null}
          {b.render({ onRun: run })}
        </div>
      ))}
    </div>
  )
}
