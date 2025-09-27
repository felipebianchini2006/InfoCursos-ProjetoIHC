import { LuNewspaper } from 'react-icons/lu'
import NewsCard from '../components/NewsCard.jsx'
import { news } from '../data/news.js'
import '../styles/pages/news.css'

const News = () => (
  <section className="page-section">
    <div className="container">
      <div className="news-hero">
        <span className="badge">
          <LuNewspaper size={16} /> Insights do mercado de TI
        </span>
        <h1>Novidades e tendências em tecnologia</h1>
        <p>
          Curadoria semanal com o que importa no universo de desenvolvimento, produto, dados e carreira. Informação
          relevante, linguagem direta e foco no seu crescimento.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
)

export default News
