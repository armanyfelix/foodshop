'use client'

import { store } from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </Provider>
  )
}
