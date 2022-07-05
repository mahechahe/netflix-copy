import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { SliderHome } from '../components/SliderHome'
import {Helmet} from "react-helmet";
import '../App.css'

export const Home = () => {

  return (
    <section className='section-home'>
      <div className='div-image-container'>
        <Nav></Nav>
        <Hero></Hero>
        <SliderHome></SliderHome>
      </div>Netflix
      <Helmet>
        <title>Home | Netflix Colombia</title>
      </Helmet>
    </section>  
  )
}
