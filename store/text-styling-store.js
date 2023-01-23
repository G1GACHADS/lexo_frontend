import { create } from 'zustand'

export const useTextStyleStore = create((set) => ({
  textStyleSize: 14,
  textStyleLineHeight: 25,
  textStyleLetterSpacing: 0.05,
  changeTextSize: (size) =>
    set((state) => ({
      textStyleSize: size,
    })),
  changeTextLineHeight: (lineHeight) =>
    set((state) => ({
      textStyleLineHeight: lineHeight,
    })),
  changeTextLetterSpacing: (letterSpacing) =>
    set((state) => ({
      textStyleLetterSpacing: letterSpacing,
    })),
}))
