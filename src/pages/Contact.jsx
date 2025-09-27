import { useState } from 'react'
import { LuMail, LuPhone, LuMessageCircle } from 'react-icons/lu'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/contact.css'

const contactOptions = [
  {
    id: 'email',
    title: 'E-mail',
    description: 'Suporte dedicado para dúvidas técnicas e pedagógicas.',
    highlight: 'contato@infocursos.com',
    icon: LuMail,
  },
  {
    id: 'phone',
    title: 'Telefone',
    description: 'Segunda a sexta, das 9h às 18h (horário de Brasília).',
    highlight: '(17) 99663-8804',
    icon: LuPhone,
  },
  {
    id: 'chat',
    title: 'Chat ao vivo',
    description: 'Equipe disponível na comunidade para respostas rápidas.',
    highlight: 'Tempo médio de resposta: 15 min',
    icon: LuMessageCircle,
  },
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="contact-hero">
          <span className="badge">Estamos aqui para ajudar</span>
          <h1>Vamos conversar sobre a sua jornada em tecnologia</h1>
          <p>
            Fale com o nosso time para entender os planos, ter suporte nas trilhas ou sugerir novos conteúdos. Responderemos
            em até um dia útil.
          </p>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option) => (
            <div key={option.id} className="surface-card contact-card">
              <IconCircle icon={option.icon} />
              <strong>{option.title}</strong>
              <span>{option.description}</span>
              <span className="highlight">{option.highlight}</span>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__grid">
            <div className="field">
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" name="name" placeholder="Como podemos te chamar?" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="topic">Qual assunto?</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="duvidas">Dúvidas sobre planos</option>
                <option value="suporte">Suporte técnico</option>
                <option value="parcerias">Parcerias e eventos</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Conte-nos como podemos ajudar"
              required
            />
          </div>

          <div className="contact-form__actions">
            <button type="submit" className="btn btn-primary">
              Enviar mensagem
            </button>
            <p>{submitted ? 'Recebemos sua mensagem! Responderemos em breve.' : 'Responderemos em até 24 horas úteis.'}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

