import { create } from 'zustand'
import theme from '../theme'

export const useTextStyleStore = create((set) => ({
  fontFamily: theme.typography.family.medium,
  size: 14,
  lineHeight: 25,
  letterSpacing: 0.05,
  changeFontFamily: (family) =>
    set((state) => ({
      fontFamily: family,
    })),
  changeTextSize: (size) =>
    set((state) => ({
      size: size,
    })),
  changeTextLineHeight: (lineHeight) =>
    set((state) => ({
      lineHeight: lineHeight,
    })),
  changeTextLetterSpacing: (letterSpacing) =>
    set((state) => ({
      letterSpacing: letterSpacing,
    })),
}))
