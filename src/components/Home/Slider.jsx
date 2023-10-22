import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import { slides } from '../../constants/data';
import { Container } from '../../styles/Container';
import { SliderWrapper, Slide, Text } from '../../styles/Home/SliderStyle';

const Slider = () => {
   return (
      <SliderWrapper>
         <Container>
            <Swiper
               modules={[Autoplay]}
               slidesPerView={6}
               spaceBetween={50}
               loop={true}
               grabCursor={true}
               autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
               }}
            >
               {slides.map(slide => {
                     return (
                        <SwiperSlide key={slide.id}>
                           <Slide>
                              <img src={slide.images} alt={slide.title}/>
                              <Text>{slide.title}</Text>
                           </Slide>
                        </SwiperSlide>
                     )
               })}
            </Swiper>
         </Container>
      </SliderWrapper>
   )
};

export default Slider;
