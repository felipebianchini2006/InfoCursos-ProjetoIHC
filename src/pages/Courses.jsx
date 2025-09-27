import { useMemo, useState } from 'react'
import { LuSparkles } from 'react-icons/lu'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'
import '../styles/pages/courses.css'

const filters = ['Todos', 'Iniciante', 'Intermediário', 'Avançado']

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'Todos') {
      return courses
    }
    return courses.filter((course) => course.level === activeFilter)
  }, [activeFilter])

  return (
    <section className="page-section">
      <div className="container">
        <div className="course-intro">
          <span className="badge">
            <LuSparkles size={16} /> Trilha completa de tecnologia
          </span>
          <h1>Catálogo de cursos InfoCursos</h1>
          <p>
            Explore trilhas criadas por especialistas para dominar desenvolvimento, dados, nuvem e inteligência
            artificial. Escolha o nível ideal e siga um roteiro com desafios reais, mentorias e certificados verificados.
          </p>
        </div>

        <div className="course-filters" role="tablist" aria-label="Filtros de nível">
          {filters.map((filter) => {
            const buttonClass = 'chip' + (filter === activeFilter ? ' is-active' : '')
            return (
              <button
                key={filter}
                type="button"
                className={buttonClass}
                onClick={() => setActiveFilter(filter)}
                role="tab"
                aria-selected={filter === activeFilter}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid grid-3 course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

