import { create } from 'zustand'

export const useUserStore = create<any>((set: any) => {
  return {
    user: null,
    setUser: (user: any) => set({ user }),
  }
})
