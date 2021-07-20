import { SiJavascript, SiMongodb, SiMysql, SiNextDotJs, SiNodeDotJs, SiReact, SiTypescript, SiPostgresql } from 'react-icons/si'

import { theme } from "../global/styles/theme"
import styles from '../styles/home.module.css'
import { Technology } from '../components/Technology'

const technologies = [
  {
    name: 'JavaScript',
    logo: <SiJavascript size='4rem' />
  },
  {
    name: 'TypeScript',
    logo: <SiTypescript size='4rem' />
  },
  {
    name: 'NodeJS',
    logo: <SiNodeDotJs size='4rem' />
  },
  {
    name: 'ReactJS',
    logo: <SiReact size='4rem' />
  },
  {
    name: 'NextJS',
    logo: <SiNextDotJs size='4rem' />
  },
  {
    name: 'MongoDB',
    logo: <SiMongodb size='4rem' />
  },
  {
    name: 'MySQL',
    logo: <SiMysql size='4rem' />
  },
  {
    name: 'Postgress',
    logo: <SiPostgresql size='4rem' />
  }

]

export default function Index() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h1 className={styles.heading}>
          Ramon Nunes
        </h1>
        <h3 className={styles.subtitle}>
          Desenvolvedor JavaScript
        </h3>
      </div>

      <main className={styles.main}>

        {
          technologies.map((tech, index) => (
            <Technology
              key={index}
              Icon={tech.logo}
              title={tech.name}
            />
          ))
        }

      </main>
    </div>
  )
}
