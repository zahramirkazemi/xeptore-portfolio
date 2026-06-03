import { useEffect, useRef, useState } from 'react';

import { BOOT_LINES } from '../core/constants.ts';

import BootLoading from './BootLoading.tsx';
import Stats from './commands/Stats.tsx';

export default function MainContent() {
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
      ref={viewportRef}
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
    >
      <BootLoading booting={booting} bootShown={bootShown} />
      <Stats />
    </div>
  )
}
