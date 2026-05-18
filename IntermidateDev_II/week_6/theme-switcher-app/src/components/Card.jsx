import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function Card({ icon, title, description, tag }) {
  const { themeObject: t } = useContext(ThemeContext)

  return (
    <div
      className="card"
      style={{
        backgroundColor: t.surface,
        border: `1px solid ${t.border}`,
        boxShadow: `0 2px 16px ${t.shadow}`,
      }}
    >
      <span className="card-icon">{icon}</span>
      <span className="card-tag" style={{ color: t.accent, backgroundColor: t.surfaceAlt }}>
        {tag}
      </span>
      <h3 className="card-title" style={{ color: t.text }}>{title}</h3>
      <p className="card-desc" style={{ color: t.textMuted }}>{description}</p>
    </div>
  )
}