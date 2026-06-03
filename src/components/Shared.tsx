export function Section({ tag, fig }: { tag: string; fig?: string }) {
  return (
    <div className="sec">
      <span className="tag">{tag}</span>
      <span className="rule" aria-hidden="true" />
      {fig ? <span className="fig">{fig}</span> : null}
    </div>
  )
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="chips" role="list" aria-label="Chips">
      {items.map((s, i) => (
        <span className="chip" key={i} role="listitem">
          {s}
        </span>
      ))}
    </div>
  )
}
