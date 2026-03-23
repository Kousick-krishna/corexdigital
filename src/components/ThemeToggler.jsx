import { useTheme } from '../App'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle-inner">
        {theme === 'dark' ? '🌙' : '☀️'}
      </div>
      <div className="theme-toggle-stars">
        <span className="t-star" />
        <span className="t-star" />
        <span className="t-star" />
      </div>
    </button>
  )
}
