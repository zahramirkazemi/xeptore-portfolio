import { type KeyboardEvent, type Ref } from 'react'

interface PromptBarProps {
  commands: readonly string[]
  handle: string
  value: string
  onChange: (value: string) => void
  onRun: (cmd: string) => void
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  inputRef: Ref<HTMLInputElement>
}

export default function PromptBar({
  commands,
  handle,
  value,
  onChange,
  onRun,
  onKeyDown,
  inputRef,
}: PromptBarProps) {
  return (
    <div className="promptbar" role="toolbar" aria-label="Commands">
      <div className="cmdrow">
        {commands.map((c) => (
          <button key={c} className="nav" onClick={() => onRun(c)} aria-label={`Run ${c}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="inputline">
        <span className="pr" aria-hidden="true">
          {handle}
          <b> ~ </b>$
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onRun(value)
            onChange('')
          }}
        >
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="type a command — try 'all' or 'help'"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
          <span className="fakecaret" style={{ display: value ? 'none' : 'block' }} aria-hidden="true" />
        </form>
        <span className="hintkey" aria-hidden="true">
          ↵ run · ↑↓ history · ⇥ complete
        </span>
      </div>
    </div>
  )
}
