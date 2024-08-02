import { Input } from '@/components/commons'
import { ContextAppProvider } from '@/context'
import { useDebounce } from '@/hooks'
import { useContext, useEffect, useState } from 'react'
import styles from './filter.module.css'

export const Filter = () => {
  const { data, filter, setFilter } = useContext(ContextAppProvider)
  const [inputValue, setInputValue] = useState(filter)
  const debouncedFilter = useDebounce(inputValue, 800)

  useEffect(() => {
    setFilter(debouncedFilter)
  }, [debouncedFilter, setFilter])

  return (
    <section className={styles.container}>
      <Input
        id="search"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        placeholder="SEARCH CHARTACTER..."
      />
      <p className={styles.filterCaption}>{data?.length} Results</p>
    </section>
  )
}
