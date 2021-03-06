import styles from '../../styles/components/inputs/Input.module.scss'
import React from 'react'

const Input = React.forwardRef((props, ref) => {

  const { name, label, type = 'text', hint = '', required = false, ...otherProps } = props

  const className = required ? styles.required : ''

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={className}>{label}</label>
      {hint && <small>{hint}</small>}
      <input id={name} required={required} type={type} {...otherProps}
        name={name} className={styles.input} ref={ref} />
    </div>
  )
})

export default Input