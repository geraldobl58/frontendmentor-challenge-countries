import React, { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | string

type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  const color = theme === 'light' ? '#333' : '#FFF'
  const backgroundColor = theme === 'light' ? '#FFF' : '#333'

  document.body.style.color = color
  document.body.style.backgroundColor = backgroundColor

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
