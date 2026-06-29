type Props = {
  numbers: string[]
}

export default function FloatingActions({ numbers }: Props) {
  return (
    <div className="floating-actions" aria-label="Contact rapide">
      {numbers.map((number) => (
        <a key={number} href={`https://wa.me/${number.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
          WhatsApp {number}
        </a>
      ))}
    </div>
  )
}
