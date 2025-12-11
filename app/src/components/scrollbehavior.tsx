import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function ScrollBehavior() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    const element = hash ? document.querySelector(hash) : null

    if (element) {
      const scrollUp = element.getBoundingClientRect().top < 0
      const nav = document.querySelector('nav')
      const navHeight = (nav?.getBoundingClientRect().height || 0) + 25

      window.scrollTo({
        top: (element as HTMLElement).offsetTop - (scrollUp ? navHeight : 0),
        behavior: window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'auto'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'auto'
      })
    }
  }, [location])

  return null
}
