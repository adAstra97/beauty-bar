import { Button, HeroEl } from "../../styles/AboutUs/HeroStyle";

const Hero = () => {

   return (
      <HeroEl>
         <span>SHORT STORY ABOUT US</span>
         <h1>The big story behind, our beautyness center</h1>
         <Button to="/contact">
            Contact Us
         </Button>
      </HeroEl>
   )
}

export default Hero;