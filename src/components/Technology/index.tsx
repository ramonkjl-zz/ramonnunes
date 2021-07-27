import styles from './styles.module.css'

type Props = {
  Icon: JSX.Element
  title: string
}

export const Technology = ({ Icon, title }: Props) => {
  return (
    <div className={styles.techContainer}>

      <div className={styles.techCircle}>
        {Icon}
      </div>
      <h2 className={styles.techHeading}>{title}</h2>

    </div>
  )
}