import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToSection() {
  const { hash, pathname, key } = useLocation()

  useLayoutEffect(() => {
    if (!hash) return

    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(hash.slice(1))
      if (!section) return
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0
      const top = window.scrollY + section.getBoundingClientRect().top - headerHeight - 20
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? 'instant' : 'smooth' })
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, pathname, key])

  return null
}
