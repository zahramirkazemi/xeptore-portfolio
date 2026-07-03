import { useState, useCallback, useEffect, useRef } from 'react';

import MainContent from './MainContent.tsx';
import TitleBar from './header/TitleBar.tsx';
import PromptBar from './footer/PromptBar.tsx';
import { CV } from '../core/data.ts';
import { BOOT_LINES, COMMANDS } from '../core/constants.ts';
import About from './commands/About.tsx';
import Stats from './commands/Stats.tsx';
import Experience from './commands/Experience.tsx';
import Skills from './commands/Skills.tsx';
import Stack from './commands/Stack.tsx';
import Education from './commands/Education.tsx';
import Contact from './commands/Contact.tsx';
import Help from './commands/Help.tsx';
import Hero from './commands/Hero.tsx';

interface Block {
  id: number
  cmd: string
  render: (ctx: { onRun: (cmd: string) => void }) => React.ReactNode
}
let _bid = 0
const bid = () => ++_bid
let _heroShown = false

export default function Terminal() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [booting, setBooting] = useState(true)
  const [bootShown, setBootShown] = useState(0)
  const [val, setVal] = useState('')
  const [hist, setHist] = useState<string[]>([])
  const [hi, setHi] = useState(-1)
  const vpRef = useRef<HTMLDivElement>(null)
  const inRef = useRef<HTMLInputElement>(null)

  const scrollDown = useCallback(() => {
    requestAnimationFrame(() => {
      const vp = vpRef.current
      if (vp) vp.scrollTop = vp.scrollHeight
    })
  }, [])

  const push = useCallback(
    (cmd: string, render: Block['render']) => {
      setBlocks((b) => [...b, { id: bid(), cmd, render }])
      scrollDown()
    },
    [scrollDown],
  )

  const run = useCallback(
    (raw: string) => {
      const cmd = (raw ?? '').trim().toLowerCase()
      if (!cmd) return
      setHist((hh) => [...hh, cmd])
      setHi(-1)

      if (cmd === 'clear' || cmd === 'cls') {
        setBlocks([])
        return
      }

      if (cmd === 'all' || cmd === 'cv' || cmd === 'resume') {
        push(cmd, () => (
          <>
            <About />
            <div style={{ height: 26 }} />
            <Stats />
            <div style={{ height: 26 }} />
            <Experience />
            <div style={{ height: 26 }} />
            <Skills />
            <div style={{ height: 26 }} />
            <Stack />
            <div style={{ height: 26 }} />
            <Education />
            <div style={{ height: 26 }} />
            <Contact />
          </>
        ))
        return
      }

      const fn = DISPATCH[cmd]
      if (fn) {
        push(cmd, () => fn)
      } else {
        push(cmd, () => (
          <p className="err">
            command not found: {cmd} — try{' '}
            <b style={{ color: 'var(--accent)' }}>help</b>
          </p>
        ))
      }
    },
    [push],
  )

  // Module-level guard prevents StrictMode double-mount from pushing hero twice
  const showHero = useCallback(() => {
    if (_heroShown) return
    _heroShown = true
    push('', () => <Hero onRun={run} />)
  }, [push, run])

  // boot sequence
  useEffect(() => {
    if (booting) {
      setTimeout(() => setBooting(false), 420)
      return
    }
    if (!booting) {
      setTimeout(() => showHero(), 1000)
      return
    }
    if (bootShown >= BOOT_LINES.length) {
      const id = setTimeout(() => setBooting(false), 420)
      return () => clearTimeout(id)
    }
    const id = setTimeout(
      () => {
        setBootShown((n) => n + 1)
        scrollDown()
      },
      bootShown === 0 ? 260 : 340,
    )
    return () => clearTimeout(id)
  }, [booting, bootShown, showHero, scrollDown])

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      run(val)
      setVal('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!hist.length) return
      const ni = hi < 0 ? hist.length - 1 : Math.max(0, hi - 1)
      setHi(ni)
      setVal(hist[ni])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (hi < 0) return
      const ni = hi + 1
      if (ni >= hist.length) {
        setHi(-1)
        setVal('')
      } else {
        setHi(ni)
        setVal(hist[ni])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const m = COMMANDS.filter((c) => c.startsWith(val.trim().toLowerCase()))
      if (m.length === 1) {
        setVal(m[0])
      } else if (m.length > 1 && val.trim()) {
        push(val.trim(), () => <p className="dim">{m.join('   ')}</p>)
      }
    } else if (e.key === 'Escape') {
      setVal('')
    }
  }

  const focusInput = () => {
    const el = inRef.current
    if (el && window.getSelection()?.isCollapsed) el.focus()
  }

  useEffect(() => {
    inRef.current?.focus()
  }, [])

  return (
    <div
      className="screen"
      style={{ fontSize: '14px' }}
      role="application"
      aria-label="Terminal portfolio"
    >
      <div className="frame">
        <TitleBar />
        <MainContent blocks={blocks} focusInput={focusInput} run={run} />
        <PromptBar
          commands={COMMANDS}
          handle={CV.handle}
          value={val}
          onChange={setVal}
          onRun={run}
          onKeyDown={onKey}
          inputRef={inRef}
        />
      </div>
    </div>
  )
}
// Command dispatch table
const DISPATCH: Record<string, React.ReactElement> = {
  help: <Help />,
  about: <About />,
  whoami: <About />,
  stats: <Stats />,
  experience: <Experience />,
  exp: <Experience />,
  work: <Experience />,
  skills: <Skills />,
  stack: <Stack />,
  education: <Education />,
  edu: <Education />,
  contact: <Contact />,
}
