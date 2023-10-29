import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import { Container } from '../../styles/Container';
import images from "../../constants/images";
import { testimonials } from "../../constants/data";

const TestimonialWrapper = styled.div`
   text-align: center;
   background-color: #EFF0F0;
   padding: 95px 0;

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
   h2 {
      margin-bottom: 65px;
   }
`;

const SliderWrapper = styled.div`
   background-color: ${({theme}) => theme.colors.primary};
   border-radius: 40px;
   padding: 95px 0;

   @media (max-width: 920px) {
      background-image: none;
      padding: 20px 0 40px;
   }
`;

const SwiperSlideWrap = styled(SwiperSlide)`
   display: flex;
   justify-content: center;
`;

const Slide = styled.div`
   display: flex;
   align-items: center;
   max-width: 1280px;
   padding: 0 30px;

   @media (max-width: 920px) {
      flex-direction: column;
   }
   @media (max-width: 500px) {
      padding: 0 15px;
   }
`;

const SlidePhoto = styled.div`
   flex: 40%;
   background-image: url(${images.decor});
   background-repeat: no-repeat;
   background-position-x: 20%;
   padding: 75px 0 90px;

   @media (max-width: 920px) {
      background-image: none;
      padding: 20px 0;
   }

   img {
      border: 5px solid ${({theme}) => theme.colors.white};
      border-radius: 50%;
      max-width: 100%;

      @media (max-width: 920px) {
         max-width: 60%;
      }
   }
`;

const SlideInfo = styled.div`
   flex: 60%;
   position: relative;

   &::before {
      content: '';
      background: url(${images.commas});
      display: block;
      position: absolute;
      width: 45px;
      height: 40px;
      top: -55px;
      left: -15px;

      @media (max-width: 920px) {
         content: none;
      }
   }

   &::after {
      content: '';
      background: url(${images.commas});
      display: block;
      position: absolute;
      width: 45px;
      height: 40px;
      right: 0;
      transform: scale(-1, 1);

      @media (max-width: 920px) {
         content: none;
      }
   }

`;

const CustomerInfo = styled.div`
   font-family: 'Manrope', sans-serif;
   font-weight: 600;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-bottom: 20px;

   @media (max-width: 920px) {
      align-items: center;
   }

   span:first-child {
      color: #EDFFF0;
      font-size: 2.0rem;
      line-height: 1.6;
      letter-spacing: -0.4px;
      text-transform: none;
   }

   span:nth-child(2) {
      color: ${({theme}) => theme.colors.white};
      font-size: 1.6rem;
      line-height: 1.5;
      text-transform: none;
   }
`;

const CustomerReview = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 10px;

   @media (max-width: 920px) {
      align-items: center;
   }

   span {
      color: #EDFFF0;
      font-family: 'Playfair Display', serif;
      font-size: 3.6rem;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.72px;
      text-transform: none;
      text-align: start;

      @media (max-width: 920px) {
         text-align: center;
      }
   }

   p {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', serif;
      font-size: 1.9rem;
      line-height: 1.8;
      text-align: start;

      @media (max-width: 920px) {
         text-align: center;
      }
   }

`;

const Buttons = styled.div`
   display: flex;
   gap: 15px;
   justify-content: center;

   button {
      width: 52px;
      height: 52px;
      cursor: pointer;
      background-color: ${({theme}) => theme.colors.white};
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
      transition: box-shadow 0.2s linear;

      &:hover {
         box-shadow: none;
      }

      &:active {
         box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35) inset;
      }
   }
`;

const Testimonial = () => {

   return (
      <TestimonialWrapper>
         <Container>
            <TestimonialEl>
               <span>Testimonials</span>
               <h2>What our Customers says...</h2>
               <SliderWrapper>
                  <Swiper
                     modules={[Navigation]}
                     grabCursor={true}
                     navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                     }}
                     slidesPerView={1}
                  >
                     {
                        testimonials.map(item => {
                           return (
                              <SwiperSlideWrap key={item.id}>
                                 <Slide>
                                    <SlidePhoto>
                                       <img src={item.photo} alt="customer" />
                                    </SlidePhoto>
                                    <SlideInfo>
                                       <CustomerInfo>
                                          <span>{item.name}</span>
                                          <span>{item.city}</span>
                                       </CustomerInfo>
                                       <CustomerReview>
                                          <span>{item.title}</span>
                                          <p>{item.text}</p>
                                       </CustomerReview>
                                    </SlideInfo>
                                 </Slide>
                              </SwiperSlideWrap>
                           )
                        })
                     }
                  </Swiper>
                  <Buttons>
                     <button className="custom-prev">
                        <BiSolidLeftArrow size={20}/>
                     </button>
                     <button className="custom-next">
                        <BiSolidRightArrow size={20}/>
                     </button>
                  </Buttons>
               </SliderWrapper>
            </TestimonialEl>
         </Container>
      </TestimonialWrapper>
   )
};

export default Testimonial;