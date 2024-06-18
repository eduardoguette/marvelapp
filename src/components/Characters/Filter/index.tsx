import { Input } from '@/components/commons'
import { ContextAppProvider } from '@/context'
import { useContext } from 'react'
import styles from './filter.module.css'

export const Filter = () => {
  const { data, filter, setFiler } = useContext(ContextAppProvider)
  return (
    <section className={styles.container}>
      <Input
        id="search"
        value={filter}
        onChange={({ target }) => setFiler(target.value)}
        placeholder="SEARCH CHARTACTER..."
      />
      <p className={styles.filterCaption}>{data?.length} Results</p>
    </section>
  )
}
