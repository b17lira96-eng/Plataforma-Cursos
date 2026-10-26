
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const url = new URL(window.location.href)

if (url.searchParams.has('utm_source')) {
  url.searchParams.delete('utm_source')

  // Atualiza a URL sem recarregar a página
  window.history.replaceState(
    window.history.state,
    '',
    url.pathname + url.search + url.hash
  )
}

// Inicializa a aplicação React
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
