import { useState, useEffect } from "react"

export const useAnimationLoop = (steps: number, interval: number) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps)
    }, interval)

    return () => clearInterval(timer) // Clean up interval on unmount
  }, [steps, interval])

  return step
}
