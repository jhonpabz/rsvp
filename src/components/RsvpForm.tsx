import { useState, type FormEvent } from 'react'
import type { Attendance, RsvpFormData } from '../types'
import { BlossomMotif, CloudMotif, CornerOrnament, DoubleHappiness } from './decorations/Motifs'
import './RsvpForm.css'

const INITIAL: RsvpFormData = {
  name: '',
  email: '',
  attendance: '',
  message: '',
}

export function RsvpForm() {
  const [form, setForm] = useState<RsvpFormData>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof RsvpFormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = <K extends keyof RsvpFormData>(key: K, value: RsvpFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof RsvpFormData, string>> = {}

    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) {
      next.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email'
    }
    if (!form.attendance) next.attendance = 'Please let us know if you can attend'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rsvp-success" role="status">
        <DoubleHappiness className="rsvp-success__xi" />
        <h3 className="rsvp-success__title">谢谢 · Thank you</h3>
        <p className="rsvp-success__text">
          {form.attendance === 'yes'
            ? `We can't wait to celebrate with you, ${form.name.split(' ')[0]}!`
            : `We'll miss you, ${form.name.split(' ')[0]} — thank you for letting us know.`}
        </p>
      </div>
    )
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
      <div className="rsvp-field">
        <label htmlFor="rsvp-name">Name</label>
        <input
          id="rsvp-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'rsvp-name-error' : undefined}
        />
        {errors.name && (
          <span id="rsvp-name-error" className="rsvp-error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="rsvp-field">
        <label htmlFor="rsvp-email">Email</label>
        <input
          id="rsvp-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'rsvp-email-error' : undefined}
        />
        {errors.email && (
          <span id="rsvp-email-error" className="rsvp-error">
            {errors.email}
          </span>
        )}
      </div>

      <fieldset className="rsvp-field rsvp-attendance">
        <legend>Going to attend?</legend>
        <div className="rsvp-attendance__options" role="radiogroup" aria-required="true">
          {(
            [
              { value: 'yes', label: 'Joyfully yes' },
              { value: 'no', label: 'Regretfully no' },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className={`rsvp-choice ${form.attendance === option.value ? 'is-selected' : ''}`}
            >
              <input
                type="radio"
                name="attendance"
                value={option.value}
                checked={form.attendance === option.value}
                onChange={() => update('attendance', option.value as Attendance)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {errors.attendance && <span className="rsvp-error">{errors.attendance}</span>}
      </fieldset>

      <div className="rsvp-field">
        <label htmlFor="rsvp-message">Message</label>
        <textarea
          id="rsvp-message"
          name="message"
          rows={4}
          placeholder="A note for the couple (optional)"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </div>

      <button type="submit" className="rsvp-submit">
        <BlossomMotif className="rsvp-submit__icon" />
        Send RSVP
      </button>

      <CloudMotif className="rsvp-form__cloud" />
      <CornerOrnament className="rsvp-form__corner rsvp-form__corner--tl" />
      <CornerOrnament className="rsvp-form__corner rsvp-form__corner--br" />
    </form>
  )
}
