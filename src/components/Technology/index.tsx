import styles from './styles.module.css'
import { TiltComponent } from '../Tilt'

type Props = {
  Icon: JSX.Element
  title: string
}

export const Technology = ({ Icon, title }: Props) => {

  return (
    <TiltComponent options={{ max: 77, scale: 1.3, perspective: 3000 }}>
      <div className={styles.techCircle}>
        {Icon}
      </div>
      <h2 className={styles.techHeading}>{title}</h2>
    </TiltComponent>
  )
}