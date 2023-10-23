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
               spaceBetween={50}
               loop={true}
               grabCursor={true}
               autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
               }}
               breakpoints={{
                  319: {
                     slidesPerView: 1,
                  },
                  400: {
                     slidesPerView: 2,
                  },
                  530: {
                     slidesPerView: 3,
                  },
                  700: {
                     slidesPerView: 4,
                  },
                  1000: {
                     slidesPerView: 5,
                  },
                  1200: {
                     slidesPerView: 6,
                  }
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
