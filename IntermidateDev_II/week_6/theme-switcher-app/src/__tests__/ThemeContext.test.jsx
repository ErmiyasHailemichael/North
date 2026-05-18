import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useContext } from 'react'
import { ThemeProvider, ThemeContext, themes } from '../ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import App from '../App'

// ─── Helper: wrap in ThemeProvider ───
const renderWithProvider = (ui, options = {}) =>
  render(<ThemeProvider>{ui}</ThemeProvider>, options)

// ─── Mock localStorage ───
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => { store[key] = String(value) },
    removeItem: (key) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  localStorage.clear()
})

// ════════════════════════════════════════════════
//  NORMAL TEST CASES
// ════════════════════════════════════════════════

describe('Normal Cases', () => {
  it('NC-1: App renders with light mode by default', () => {
    renderWithProvider(<App />)
    const appDiv = document.querySelector('.light-mode')
    expect(appDiv).toBeInTheDocument()
    expect(document.querySelector('.dark-mode')).not.toBeInTheDocument()
  })

  it('NC-2: Clicking the toggle switches from light to dark mode', () => {
    renderWithProvider(<App />)
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    fireEvent.click(button)
    expect(document.querySelector('.dark-mode')).toBeInTheDocument()
    expect(document.querySelector('.light-mode')).not.toBeInTheDocument()
  })

  it('NC-3: Clicking the toggle twice returns to light mode', () => {
    renderWithProvider(<App />)
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    fireEvent.click(button)
    // Now dark — button label should flip
    const darkButton = screen.getByRole('button', { name: /switch to light mode/i })
    fireEvent.click(darkButton)
    expect(document.querySelector('.light-mode')).toBeInTheDocument()
  })
})

// ════════════════════════════════════════════════
//  EDGE TEST CASES
// ════════════════════════════════════════════════

describe('Edge Cases', () => {
  it('EC-1: Theme persists to localStorage on toggle', () => {
    renderWithProvider(<App />)
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    fireEvent.click(button)
    expect(localStorage.getItem('theme-preference')).toBe('dark')
  })

  it('EC-2: App loads saved dark theme from localStorage on mount', () => {
    localStorage.setItem('theme-preference', 'dark')
    renderWithProvider(<App />)
    expect(document.querySelector('.dark-mode')).toBeInTheDocument()
  })

  it('EC-3: Invalid localStorage value falls back to light theme', () => {
    localStorage.setItem('theme-preference', 'purple') // invalid value
    renderWithProvider(<App />)
    // Should not crash, should default to light
    const appEl = document.querySelector('.light-mode, .dark-mode')
    expect(appEl).toBeInTheDocument()
    // Should be light (not dark) since 'purple' is not 'dark'
    expect(document.querySelector('.light-mode')).toBeInTheDocument()
  })
})

// ════════════════════════════════════════════════
//  CONTEXT & THEME OBJECT TESTS
// ════════════════════════════════════════════════

describe('ThemeContext values', () => {
  it('Context exposes correct themeObject for light', () => {
    let capturedContext
    function Consumer() {
      capturedContext = useContext(ThemeContext)
      return null
    }
    renderWithProvider(<Consumer />)
    expect(capturedContext.theme).toBe('light')
    expect(capturedContext.themeObject).toEqual(themes.light)
  })

  it('Context exposes correct themeObject after toggle', () => {
    let capturedContext
    function Consumer() {
      capturedContext = useContext(ThemeContext)
      return <button onClick={capturedContext.toggleTheme}>toggle</button>
    }
    renderWithProvider(<Consumer />)
    fireEvent.click(screen.getByText('toggle'))
    expect(capturedContext.theme).toBe('dark')
    expect(capturedContext.themeObject).toEqual(themes.dark)
  })
})