import { useState } from 'react'
import { COUPLE } from '../data'
import { DoubleHappiness, LanternMotif, CloudMotif } from './decorations/Motifs'
import './Envelope.css'

interface EnvelopeProps {
  onOpened: () => void
}

export function Envelope({ onOpened }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)
    window.setTimeout(onOpened, 1600)
  }

  return (
    <section className={`envelope-stage ${isOpening ? 'is-opening' : ''}`}>
      <div className="envelope-bg" aria-hidden="true">
        <div className="envelope-bg__wash" />
        <div className="envelope-bg__pattern" />
        <LanternMotif className="floating-lantern floating-lantern--left" />
        <LanternMotif className="floating-lantern floating-lantern--right" />
        <CloudMotif className="drift-cloud drift-cloud--1" />
        <CloudMotif className="drift-cloud drift-cloud--2" />
      </div>

      <div className="envelope-intro">
        <p className="envelope-intro__eyebrow">新春喜帖 · A New Year Invitation</p>
        <h1 className="envelope-intro__title">
          <span className="envelope-intro__names">{COUPLE.groom}</span>
          <DoubleHappiness className="envelope-intro__xi" />
          <span className="envelope-intro__names">{COUPLE.bride}</span>
        </h1>
        <p className="envelope-intro__hint">
          {isOpening ? 'Opening your invitation…' : 'Tap the envelope to open'}
        </p>
      </div>

      <button
        type="button"
        className="envelope"
        onClick={handleOpen}
        aria-label="Open wedding invitation envelope"
        disabled={isOpening}
      >
        <div className="envelope__shadow" aria-hidden="true" />

        <div className="envelope__body">
          <div className="envelope__pocket" />
          <div className="envelope__letter">
            <DoubleHappiness className="envelope__letter-xi" />
            <p>You are invited</p>
            <span>{COUPLE.chinese}</span>
          </div>
          <div className="envelope__flap">
            <div className="envelope__flap-face envelope__flap-face--front" />
            <div className="envelope__flap-face envelope__flap-face--back" />
          </div>
          <div className="envelope__seal" aria-hidden="true">
            <DoubleHappiness />
          </div>
        </div>
      </button>

      <div className={`envelope-reveal ${isOpening ? 'is-visible' : ''}`} aria-hidden={!isOpening}>
        <div className="envelope-reveal__burst" />
      </div>
    </section>
  )
}
