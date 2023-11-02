import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Recommended from "../components/Home/Recommended";
import Slider from "../components/Home/Slider";
import Subscribe from "../components/Home/Subscribe";
import Testimonial from "../components/Testimonial";

const Home = () => {
   return (
      <>
         <Hero/>
         <Slider/>
         <Experience/>
         <Recommended/>
         <Testimonial/>
         <Subscribe/>
      </>
   )
};

export default Home;