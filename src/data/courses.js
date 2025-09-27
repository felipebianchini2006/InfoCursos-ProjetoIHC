import { SiJavascript, SiGo, SiRust } from 'react-icons/si'
import { LuBrain } from 'react-icons/lu'
import pythonLogo from '../assets/python-logo.png'
import javaLogo from '../assets/java-logo.png'
import cppLogo from '../assets/cpp-logo.png'

export const courses = [
  {
    id: 'python-fundamentos',
    title: 'Python Fundamentos',
    description:
      'Domine a linguagem mais versátil do mercado com projetos focados em dados, automação e desenvolvimento web.',
    duration: '48h',
    level: 'Iniciante',
    tags: ['Back-end', 'Dados', 'Automação'],
    media: { type: 'image', src: pythonLogo, alt: 'Logo da linguagem Python' },
  },
  {
    id: 'java-profissional',
    title: 'Java Profissional',
    description:
      'Construa aplicações robustas com Java, Spring e bancos relacionais. Ideal para quem busca atuar em grandes empresas.',
    duration: '60h',
    level: 'Intermediário',
    tags: ['Back-end', 'Spring Boot', 'APIs'],
    media: { type: 'image', src: javaLogo, alt: 'Logo da linguagem Java' },
  },
  {
    id: 'cmaisplus-performance',
    title: 'C++ Performance',
    description:
      'Aprenda algoritmos e estruturas de dados avançadas com C++. Curso com foco em performance e computação de alto nível.',
    duration: '54h',
    level: 'Avançado',
    tags: ['Performance', 'Algoritmos', 'Games'],
    media: { type: 'image', src: cppLogo, alt: 'Logo da linguagem C++' },
  },
  {
    id: 'javascript-spa',
    title: 'JavaScript Moderno',
    description:
      'Do básico ao avançado com foco em aplicações front-end modernas utilizando React, Vite e TypeScript.',
    duration: '50h',
    level: 'Intermediário',
    tags: ['Front-end', 'React', 'TypeScript'],
    media: { type: 'icon', icon: SiJavascript, alt: 'Ícone da linguagem JavaScript' },
  },
  {
    id: 'go-microservices',
    title: 'Go para Microsserviços',
    description:
      'Implemente APIs enxutas, escaláveis e observáveis com Go, Docker e Kubernetes.',
    duration: '42h',
    level: 'Intermediário',
    tags: ['Cloud', 'APIs', 'DevOps'],
    media: { type: 'icon', icon: SiGo, alt: 'Ícone da linguagem Go' },
  },
  {
    id: 'ia-aplicada',
    title: 'Inteligência Artificial aplicada',
    description:
      'Construa soluções inteligentes com Python, frameworks modernos e práticas de IA responsável.',
    duration: '58h',
    level: 'Avançado',
    tags: ['IA', 'Machine Learning', 'Responsabilidade'],
    media: { type: 'icon', icon: LuBrain, alt: 'Ícone representando Inteligência Artificial' },
  },
]

