import { useEffect } from 'react'

const VlibrasWidget = () => {
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 20

    const initWidget = () => {
      if (window?.VLibras?.Widget) {
        if (!window.__vlibrasWidgetInstance) {
          window.__vlibrasWidgetInstance = new window.VLibras.Widget('https://vlibras.gov.br/app')
        }
        return true
      }
      return false
    }

    if (!initWidget()) {
      const interval = setInterval(() => {
        attempts += 1
        if (initWidget() || attempts >= maxAttempts) {
          clearInterval(interval)
        }
      }, 500)
      return () => clearInterval(interval)
    }

    return undefined
  }, [])

  return (
    <div className="vlibras-container" aria-hidden="true">
      <div vw className="enabled">
        <div vw-access-button className="active" />
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </div>
  )
}

export default VlibrasWidget
