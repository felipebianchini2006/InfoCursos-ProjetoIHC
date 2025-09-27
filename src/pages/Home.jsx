import { NavLink } from 'react-router-dom'
import { LuSparkles, LuArrowUpRight, LuShieldCheck, LuUsers, LuGraduationCap, LuThumbsUp } from 'react-icons/lu'
import heroIllustration from '../assets/ilustracao-tecnologia.png'
import { courses } from '../data/courses.js'
import { news } from '../data/news.js'
import { highlights } from '../data/features.js'
import CourseCard from '../components/CourseCard.jsx'
import NewsCard from '../components/NewsCard.jsx'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/home.css'

const stats = [
  {
    id: 'alunos',
    value: '+12k',
    label: 'Alunos ativos construindo portfólio',
    icon: LuUsers,
  },
  {
    id: 'graduacao',
    value: '93%',
    label: 'Taxa média de conclusão nas trilhas',
    icon: LuGraduationCap,
  },
  {
    id: 'mentores',
    value: '120+',
    label: 'Mentores e especialistas parceiros',
    icon: LuShieldCheck,
  },
  {
    id: 'satisfacao',
    value: '4,9/5',
    label: 'Avaliação média dos alunos',
    icon: LuThumbsUp,
  },
]

const Home = () => {
  const featuredCourses = courses.slice(0, 3)
  const latestNews = news.slice(0, 2)

  return (
    <>
      <section className="page-section">
        <div className="container home-hero">
          <div className="home-hero__content">
            <span className="badge home-hero__badge">
              <LuSparkles size={16} /> Nova versão 2025
            </span>

            <h1 className="home-hero__title">
              A plataforma de cursos pensada para construir carreira em tecnologia
            </h1>

            <p className="home-hero__description">
              Bem-vindo ao InfoCursos: aqui você aprende programação, design e inovação digital com conteúdo atualizado,
              projetos guiados e mentoria do mercado. Evolua do básico ao avançado com o seu ritmo.
            </p>

            <div className="home-hero__actions">
              <NavLink to="/cursos" className="btn btn-primary">
                Explorar trilhas
                <LuArrowUpRight size={18} />
              </NavLink>
              <NavLink to="/novidades" className="btn btn-outline">
                Ver novidades e eventos
              </NavLink>
            </div>
          </div>

          <div className="home-hero__media">
            <img src={heroIllustration} alt="Estudante utilizando recursos tecnológicos" loading="lazy" />
            <div className="home-hero__floating">
              <strong>+400 projetos</strong>
              <span className="text-muted">Desafios reais para evoluir seu portfólio</span>
            </div>
          </div>
        </div>

        <div className="container home-stats" aria-label="Indicadores da comunidade InfoCursos">
          {stats.map((item) => (
            <div className="home-stats__item" key={item.id}>
              <IconCircle icon={item.icon} />
              <strong>{item.value}</strong>
              <span className="text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Aprenda com especialistas e apoio contínuo</h2>
              <p>
                Mentoria, comunidade e conteúdos atualizados para que você avance mesmo enquanto concilia estudos com o
                trabalho.
              </p>
            </div>
            <NavLink to="/contato" className="btn btn-outline">
              Falar com a equipe
            </NavLink>
          </div>

          <div className="home-highlight-grid">
            {highlights.map((item) => (
              <div key={item.id} className="home-highlight-card">
                <IconCircle icon={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Linguagens em destaque</h2>
              <p>
                Escolha a trilha certa para o seu momento. A cada módulo você aplica o conhecimento em desafios reais e
                recebe feedbacks detalhados.
              </p>
            </div>
            <NavLink to="/cursos" className="btn btn-outline">
              Ver catálogo completo
            </NavLink>
          </div>

          <div className="grid grid-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Últimas novidades</h2>
              <p>
                Tendências, eventos e insights para você acompanhar o mercado de tecnologia sem ruído e com curadoria do time
                InfoCursos.
              </p>
            </div>
            <NavLink to="/novidades" className="btn btn-outline">
              Acessar blog completo
            </NavLink>
          </div>

          <div className="news-preview-grid">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Pronto para o próximo passo?</h2>
              <p>
                Faça parte da comunidade que transforma aprendizados em resultados. Trilhas organizadas, comunidade ativa e
                mentoria para você crescer em tecnologia.
              </p>
            </div>
            <div className="home-hero__actions" style={{ justifyContent: 'flex-start' }}>
              <NavLink to="/cadastro" className="btn btn-outline">
                Criar conta gratuita
              </NavLink>
              <NavLink to="/login" className="btn btn-ghost" style={{ color: 'inherit' }}>
                Já tenho conta
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

