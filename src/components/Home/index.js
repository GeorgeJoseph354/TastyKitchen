import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Offers from '../Offers'
import TopBrandCarousal from '../TopBrandCarousal'
import MenuSection from '../MenuSection'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <Offers />
      <TopBrandCarousal />
      <MenuSection />
      <Footer />
    </>
  )
}

export default Home
