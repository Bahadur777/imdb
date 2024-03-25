'use client'
import { ThemeProvider } from "next-themes"



export const Providers = ({children}) => {
  return (
    <ThemeProvider>
      <div className=" dark:text-white dark:bg-gray-700  min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  )
}
export default Providers