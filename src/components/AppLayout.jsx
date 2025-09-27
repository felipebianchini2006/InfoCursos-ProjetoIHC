import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { LuArrowUpRight, LuMenu, LuX, LuInstagram, LuLinkedin, LuGithub } from 'react-icons/lu'
import ThemeToggle from './ThemeToggle.jsx'
import AccessibilityControls from './AccessibilityControls.jsx'
import VlibrasWidget from './VlibrasWidget.jsx'
import '../styles/layout.css'
import '../styles/accessibility.css'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/cursos', label: 'Cursos' },
  { to: '/novidades', label: 'Novidades' },
  { to: '/sobre', label: 'Sobre TI' },
  { to: '/contato', label: 'Contato' },
]

const AppLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navClassName = 'main-nav' + (menuOpen ? ' is-open' : '')

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container header-container">
          <NavLink to="/" className="brand" aria-label="Voltar para a página inicial">
            <div className="brand-symbol">IC</div>
            <div className="brand-text">
              <span>InfoCursos</span>
              <p>Conhecimento para impulsionar sua carreira</p>
            </div>
          </NavLink>

          <nav className={navClassName} aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <NavLink to="/login" className="btn btn-ghost" aria-label="Ir para login">
              Login
            </NavLink>
            <NavLink to="/cadastro" className="btn btn-primary btn-compact">
              Começar agora
              <LuArrowUpRight size={18} />
            </NavLink>
          </div>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand" style={{ gap: '0.75rem' }}>
                <div className="brand-symbol">IC</div>
                <div className="brand-text">
                  <span>InfoCursos</span>
                  <p>Trilhas completas para quem quer viver de tecnologia.</p>
                </div>
              </div>
              <p>
                Desenvolva habilidades atuais, construa portfólio e conquiste novas oportunidades com apoio de uma
                comunidade ativa.
              </p>
            </div>

            <div className="footer-links">
              <span>Conteúdos</span>
              <NavLink to="/cursos">Catálogo de cursos</NavLink>
              <NavLink to="/novidades">Blog & novidades</NavLink>
              <NavLink to="/sobre">Mercado de TI</NavLink>
            </div>

            <div className="footer-links">
              <span>Ajuda</span>
              <a href="mailto:contato@infocursos.com">contato@infocursos.com</a>
              <a href="tel:+551199999999">+55 11 99999-9999</a>
              <NavLink to="/contato">Central de contato</NavLink>
            </div>

            <div className="footer-links">
              <span>Comunidade</span>
              <a href="#">Trilhas gratuitas</a>
              <a href="#">Mentorias</a>
              <a href="#">Parcerias</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} InfoCursos. Todos os direitos reservados.</span>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram">
                <LuInstagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LuLinkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub">
                <LuGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <AccessibilityControls />
      <VlibrasWidget />
    </div>
  )
}

export default AppLayout
