"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const HeroExperience = dynamic(
  () => import("./HeroExperience.jsx"),
  { ssr: false }
)

const IDLE_TIMEOUT_MS = 1500
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "wheel"]

const HeroScene = () => {
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    let cancelled = false
    let idleId = 0
    let timeoutId = 0

    const mount = () => {
      if (!cancelled) setShouldMount(true)
    }

    const scheduleMount = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(mount, { timeout: IDLE_TIMEOUT_MS })
      } else {
        timeoutId = window.setTimeout(mount, 300)
      }
    }

    if (document.readyState === "complete") {
      scheduleMount()
    } else {
      window.addEventListener("load", scheduleMount, { once: true })
    }

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, mount, { once: true, passive: true })
    )

    return () => {
      cancelled = true
      window.removeEventListener("load", scheduleMount)
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId)
      window.clearTimeout(timeoutId)
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, mount)
      )
    }
  }, [])

  return (
    <div className="w-full h-full">
      {shouldMount ? <HeroExperience /> : null}
    </div>
  )
}

export default HeroScene
