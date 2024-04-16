"use client"
import Home from '@/app/Home/page';

import { ReactNode } from "react"

export default ({ children }: { children: ReactNode }) => {
  return (
    <Home>
      {children}
    </Home>
  )
}