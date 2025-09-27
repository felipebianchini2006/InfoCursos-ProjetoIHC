import { useEffect } from 'react'

const VlibrasWidget = () => {
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 30

    const initWidget = () => {
      try {
        if (window?.VLibras?.Widget) {
          if (!window.__vlibrasWidgetInstance) {
            window.__vlibrasWidgetInstance = new window.VLibras.Widget('https://vlibras.gov.br/app')
            console.log('VLibras Widget initialized successfully')
          }
          return true
        }
      } catch (error) {
        console.error('Error initializing VLibras Widget:', error)
      }
      return false
    }

    // Try to initialize immediately
    if (!initWidget()) {
      const interval = setInterval(() => {
        attempts += 1
        console.log(`VLibras initialization attempt ${attempts}/${maxAttempts}`)
        
        if (initWidget() || attempts >= maxAttempts) {
          clearInterval(interval)
          if (attempts >= maxAttempts) {
            console.warn('VLibras Widget failed to initialize after maximum attempts')
          }
        }
      }, 200)
      
      return () => clearInterval(interval)
    }

    return undefined
  }, [])

  return (
    <div className="vlibras-container">
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  )
}

export default VlibrasWidget
