import {
  create
} from 'zustand'

export const textContent = create((set) => ({
  markdown: '',
  setContent: (markdown) => set((state) => ({
    markdown: markdown
  })),
}))