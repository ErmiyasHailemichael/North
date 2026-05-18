import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function ThemeSwitcher() {
  const { theme, toggleTheme, themeObject: t } = useContext(ThemeContext)

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        backgroundColor: t.surfaceAlt,
        border: `1.5px solid ${t.border}`,
        color: t.text,
      }}
    >
      <span className="toggle-track" style={{ backgroundColor: isDark ? t.accent : t.border }}>
        <span
          className={`toggle-thumb ${isDark ? 'toggle-thumb--dark' : ''}`}
          style={{ backgroundColor: isDark ? '#fff' : t.surface }}
        />
      </span>
      <span className="toggle-label">
        {isDark ? '🌙 Dark' : '☀️ Light'}
      </span>
    </button>
  )
}