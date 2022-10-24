import { useCallback, useEffect, useRef } from 'react'
import Stats from 'stats.js'

import video from 'assets/video.webm'

import styles from './App.module.css'

const App = () => {
  const stats = useRef<Stats>()

  const showStats = useCallback((element: HTMLDivElement | null) => {
    if (!element) {
      return
    }
    stats.current = new Stats()
    element.appendChild(stats.current.dom)
  }, [])

  useEffect(() => {
    let requestId: number

    const loop = () => {
      stats.current?.update()
      requestId = requestAnimationFrame(loop)
    }

    requestId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(requestId)
  }, [])

  return (
    <>
      <div ref={showStats} />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop muted />
      <video className={styles.video} src={video} autoPlay loop />
      <div className={styles.disclaimer}>This is a test</div>
    </>
  )
}

export default App
