import { createContext, useState, useEffect } from 'react'

export const themes = {
  light: {
    name: 'light',
    background: '#f5f0e8',
    surface: '#ffffff',
    surfaceAlt: '#ece7dc',
    text: '#1a1a1a',
    textMuted: '#6b6560',
    accent: '#c8410a',
    accentHover: '#a33508',
    border: '#d4cfc6',
    shadow: 'rgba(0,0,0,0.08)',
  },
  dark: {
    name: 'dark',
    background: '#0f0f0f',
    surface: '#1a1a1a',
    surfaceAlt: '#242424',
    text: '#f0ece4',
    textMuted: '#8a8480',
    accent: '#e8622a',
    accentHover: '#f07040',
    border: '#2e2e2e',
    shadow: 'rgba(0,0,0,0.4)',
  },
}

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme-preference')
    return saved === 'dark' || saved === 'light' ? saved : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme-preference', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    themeObject: themes[theme],
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}