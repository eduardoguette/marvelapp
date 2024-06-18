import { Header, Main } from '@/layout'
import { Outlet } from 'react-router-dom'


export default function MarvelApp() {
  return (
    <> 
      <Header/>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
