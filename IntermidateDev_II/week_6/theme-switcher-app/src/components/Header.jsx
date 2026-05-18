import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const { themeObject: t } = useContext(ThemeContext)

  return (
    <header
      className="app-header"
      style={{
        backgroundColor: t.surface,
        borderBottom: `1px solid ${t.border}`,
        boxShadow: `0 1px 12px ${t.shadow}`,
      }}
    >
      <div className="header-inner">
        <div className="header-brand">
          <span className="brand-mark" style={{ color: t.accent }}>◆</span>
          <span className="brand-name" style={{ color: t.text }}>Lumina</span>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}