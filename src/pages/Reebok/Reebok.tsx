import { Banner } from '../../components/Banner/Banner'
import { Catalog } from '../../components/Catalog/Catalog'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/Container/Container'
import styles from './Reebok.module.scss'

export const Reebok = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.wrapper}>
          <Sidebar />
          <Banner />
        </div>
      </Container>
      <Catalog apiUrl='http://localhost:3000/categories/4' brand='Reebok' />
      <Footer />
    </>
  )
}