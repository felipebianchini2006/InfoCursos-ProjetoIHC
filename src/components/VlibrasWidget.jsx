import { useEffect } from 'react'

const VlibrasWidget = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    script.async = true
    script.onload = () => {
      if (window?.VLibras?.Widget) {
        // eslint-disable-next-line no-new
        new window.VLibras.Widget('https://vlibras.gov.br/app')
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div vw className="enabled" style={{ zIndex: 999 }}>
      <div vw-access-button className="active" />
      <div vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  )
}

export default VlibrasWidget
