import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Container } from '../../styles/Container';
import images from "../../constants/images";

const TestimonialWrapper = styled.div`
   text-align: center;

   span {
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.main};
   }
`;

const TestimonialEl = styled.div`

`;




const Testimonial = () => {
   return (
      <TestimonialWrapper>
         <Container>
            <TestimonialEl>
               <span>Testimonials</span>
               <h2>What our Customers says...</h2>
               <Swiper>
                  {

                  }
               </Swiper>
            </TestimonialEl>
         </Container>
      </TestimonialWrapper>
   )
};

export default Testimonial;