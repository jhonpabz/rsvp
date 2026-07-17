import { COUPLE, EVENT, PRENUP_PHOTOS } from '../data'
import {
  BlossomMotif,
  CloudMotif,
  CornerOrnament,
  DoubleHappiness,
  LanternMotif,
} from './decorations/Motifs'
import { RsvpForm } from './RsvpForm'
import './Invitation.css'

export function Invitation() {
  return (
    <main className="invitation">
      <Hero />
      <Details />
      <Gallery />
      <RsvpSection />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
          alt=""
          className="hero__image"
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <LanternMotif className="hero__lantern hero__lantern--l" />
        <LanternMotif className="hero__lantern hero__lantern--r" />

        <p className="hero__eyebrow">Together with their families</p>
        <h1 className="hero__brand">
          <span className="hero__name">{COUPLE.groom}</span>
          <DoubleHappiness className="hero__xi" />
          <span className="hero__name">{COUPLE.bride}</span>
        </h1>
        <p className="hero__tagline">
          Request the pleasure of your company as they begin a new chapter beneath red lanterns and
          spring blossoms.
        </p>
        <div className="hero__cta">
          <a href="#rsvp" className="hero__btn">
            RSVP
          </a>
          <a href="#details" className="hero__btn hero__btn--ghost">
            Celebration details
          </a>
        </div>
      </div>

      <CloudMotif className="hero__cloud hero__cloud--1" />
      <CloudMotif className="hero__cloud hero__cloud--2" />
    </header>
  )
}

function Details() {
  const items = [
    { label: 'Date', value: EVENT.date },
    { label: 'Time', value: EVENT.time },
    { label: 'Venue', value: EVENT.venue },
    { label: 'Address', value: EVENT.address },
    { label: 'Attire', value: EVENT.dressCode },
  ]

  return (
    <section id="details" className="details">
      <div className="details__ornament" aria-hidden="true">
        <BlossomMotif className="details__blossom details__blossom--1" />
        <BlossomMotif className="details__blossom details__blossom--2" />
      </div>

      <div className="section-head">
        <DoubleHappiness className="section-head__xi" />
        <h2 className="section-head__title">The Celebration</h2>
        <p className="section-head__sub">
          Join us for a Chinese New Year wedding feast filled with joy, family, and good fortune.
        </p>
      </div>

      <dl className="details__list">
        {items.map((item) => (
          <div key={item.label} className="details__row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <p className="details__chinese">{COUPLE.chinese}</p>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <div className="section-head section-head--light">
        <h2 id="gallery-heading" className="section-head__title">
          Our Story in Frames
        </h2>
        <p className="section-head__sub">Prenup moments captured before the big day.</p>
      </div>

      <div className="gallery__grid">
        {PRENUP_PHOTOS.map((photo, index) => (
          <figure
            key={photo.src}
            className={`gallery__item gallery__item--${(index % 3) + 1}`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

function RsvpSection() {
  return (
    <section id="rsvp" className="rsvp-section">
      <CornerOrnament className="rsvp-section__corner rsvp-section__corner--tl" />
      <CornerOrnament className="rsvp-section__corner rsvp-section__corner--br" />

      <div className="section-head">
        <DoubleHappiness className="section-head__xi" />
        <h2 className="section-head__title">Kindly Reply</h2>
        <p className="section-head__sub">
          Please RSVP so we may prepare a seat and a blessing for you.
        </p>
      </div>

      <RsvpForm />
    </section>
  )
}

function Footer() {
  return (
    <footer className="invitation-footer">
      <LanternMotif className="invitation-footer__lantern" />
      <p className="invitation-footer__xi">囍</p>
      <p>
        {COUPLE.groom} & {COUPLE.bride}
      </p>
      <p className="invitation-footer__year">春节快乐 · Happy Chinese New Year</p>
    </footer>
  )
}
