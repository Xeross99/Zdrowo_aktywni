'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedNumber({ value, className }) {
  let numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10)
  let suffix = value.replace(/[0-9]/g, '')
  let [display, setDisplay] = useState(0)
  let ref = useRef(null)
  let hasAnimated = useRef(false)

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          let duration = 1500
          let startTime = null

          function animate(timestamp) {
            if (!startTime) startTime = timestamp
            let progress = Math.min((timestamp - startTime) / duration, 1)
            let eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.floor(eased * numericPart))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericPart])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
