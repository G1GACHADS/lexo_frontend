import { create } from 'zustand'

export const useTextStyleStore = create((set) => ({
  size: 14,
  lineHeight: 25,
  letterSpacing: 0.05,
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
