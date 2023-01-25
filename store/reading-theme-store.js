import { create } from 'zustand'
import theme from '../theme'

export const readingThemeOption = {
  DEFAULT: { bg: theme.colors.white, fg: theme.colors.black },
  CALM: { bg: theme.colors.calmBg, fg: theme.colors.calmTxt },
  FOCUS: { bg: theme.colors.focusBg, fg: theme.colors.focusTxt },
}

export const useReadingThemeStore = create((set, get) => ({
  readingTheme: readingThemeOption.DEFAULT,
  setReadingTheme: (newTheme) =>
    set((state) => ({
      readingTheme: newTheme,
    })),
}))
