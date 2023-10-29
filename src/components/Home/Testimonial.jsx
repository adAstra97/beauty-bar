import { Swiper } from 'swiper/react';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import { Container } from '../../styles/Container';
import { testimonials } from "../../constants/data";
import { Buttons, CustomerInfo, CustomerReview, Slide, SlideInfo, SlidePhoto, SliderWrapper, SwiperSlideWrap, TestimonialEl, TestimonialWrapper } from '../../styles/Home/Testimonial';


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