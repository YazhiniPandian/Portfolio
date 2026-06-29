/**
 * Fixed ambient gradient orbs — Wisteria & Cream dreamy atmosphere
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-bg pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <div className="ambient-orb ambient-orb--1" />
      <div className="ambient-orb ambient-orb--2" />
      <div className="ambient-orb ambient-orb--3" />
      <div className="ambient-orb ambient-orb--4" />
    </div>
  )
}
