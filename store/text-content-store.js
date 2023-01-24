import { create } from 'zustand'

export const TextContent = create((set) => ({
  markdown:'',
  setContent: (markdown) => set((state) => ({ markdown: markdown })),
}))