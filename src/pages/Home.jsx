import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Recommended from "../components/Home/Recommended";
import Slider from "../components/Home/Slider";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
   return (
      <>
         <Hero/>
         <Slider/>
         <Experience/>
         <Recommended/>
         <Testimonial/>
      </>
   )
}

export default Home