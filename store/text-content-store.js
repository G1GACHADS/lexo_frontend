import { create } from 'zustand'

export const useTextContentStore = create((set) => ({
  markdown: '',
  setContent: (markdown) =>
    set((state) => ({
      markdown: markdown,
    })),
}))
