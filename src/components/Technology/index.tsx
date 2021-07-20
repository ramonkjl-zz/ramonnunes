import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import styles from './styles.module.css'

type Props = {
    children?: ReactNode
    Icon: JSX.Element
    title: string
}

export const Technology = ({ children, Icon, title }: Props) => {
    return (
        <div className={styles.techContainer}>

            <div className={styles.techCircle}>
                {Icon}
            </div>
            <h2 className={styles.techHeading}>{title}</h2>

        </div>
    )
}