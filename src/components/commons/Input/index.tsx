import logoSearch from '@/assets/search.svg'
import styles from './input.module.css'
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input: React.FC<IInput> = (props) => {
  return (
    <label htmlFor={props.id} className={styles.label}>
      <img className={styles.icon} src={logoSearch} alt="sear" />
      <input {...props} className={styles.input} />
    </label>
  )
}
