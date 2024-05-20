import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type themeT = {
  theme: string
  setTheme: (newTheme: string) => void
}

const useTheme = create<themeT>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: newTheme => set({ theme: newTheme }),
    }),
    { name: 'theme' },
  ),
)

export default useTheme
