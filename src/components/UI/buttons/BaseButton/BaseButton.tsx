import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './BaseButton.module.css'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.baseBtn} shuffle-hover-inside`}>
      {children}
    </button>
  )
}
