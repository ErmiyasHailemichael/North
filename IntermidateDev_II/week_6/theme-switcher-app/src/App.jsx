import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Header from './components/Header'
import Card from './components/Card'

const CARDS = [
  {
    icon: '🎨',
    title: 'Design Systems',
    description: 'Build cohesive, scalable UI systems that adapt seamlessly to any context or theme.',
    tag: 'Design',
  },
  {
    icon: '⚡',
    title: 'React Context API',
    description: 'Share state globally without prop drilling. Clean, efficient, and built right into React.',
    tag: 'Dev',
  },
  {
    icon: '🌙',
    title: 'Dark Mode UX',
    description: 'Reduce eye strain and improve readability. Respect your users\' preferences at all times.',
    tag: 'UX',
  },
  {
    icon: '💾',
    title: 'Persistent State',
    description: 'LocalStorage keeps your theme preference across sessions. It just remembers.',
    tag: 'Feature',
  },
  {
    icon: '♿',
    title: 'Accessibility',
    description: 'Proper ARIA labels and contrast ratios ensure everyone can use your app comfortably.',
    tag: 'A11y',
  },
  {
    icon: '🔧',
    title: 'Vite + HMR',
    description: 'Blazing-fast development with Hot Module Replacement. See changes instantly.',
    tag: 'Tooling',
  },
]

export default function App() {
  const { theme, themeObject: t } = useContext(ThemeContext)

  return (
    <div
      className={`app ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}
      style={{ backgroundColor: t.background, color: t.text }}
    >
      <Header />

      <main className="main-content">
        <section className="hero">
          <p className="hero-eyebrow" style={{ color: t.accent }}>React Context API</p>
          <h1 className="hero-title" style={{ color: t.text }}>
            Global Theme<br />
            <span style={{ color: t.accent }}>Switcher</span>
          </h1>
          <p className="hero-sub" style={{ color: t.textMuted }}>
            A minimal demo of dark/light mode powered by{' '}
            <code style={{ color: t.accent, backgroundColor: t.surfaceAlt }}>useContext</code>{' '}
            and localStorage persistence.
          </p>

          <div
            className="theme-badge"
            style={{ backgroundColor: t.surfaceAlt, border: `1px solid ${t.border}` }}
          >
            <span className="badge-dot" style={{ backgroundColor: t.accent }} />
            <span style={{ color: t.textMuted }}>Current theme: </span>
            <strong style={{ color: t.text }}>{theme.toUpperCase()}</strong>
          </div>
        </section>

        <section className="cards-grid">
          {CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </section>

        <section
          className="info-strip"
          style={{ backgroundColor: t.surfaceAlt, border: `1px solid ${t.border}` }}
        >
          <span style={{ color: t.textMuted }}>
            Toggle the theme using the button in the header. Your preference is saved automatically.
          </span>
        </section>
      </main>
    </div>
  )
}