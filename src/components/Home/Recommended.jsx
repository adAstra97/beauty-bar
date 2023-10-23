import { BsStar } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Container } from "../../styles/Container";
import { salons } from "../../constants/data";

import { RecommendedWrapper, RecommendedEl, Slide, TextInfo, TopText, Info, Button } from '../../styles/Home/RecommendedStyle';

const Recommended = () => {
   return (
      <RecommendedWrapper>
         <Container>
            <RecommendedEl>
               <span>Our Services</span>
               <h2>Recommended</h2>
               <p>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
               <Swiper
                  slidesPerView={4}
                  spaceBetween={24}
                  modules={[Navigation]}
                  navigation={true}
                  breakpoints={{
                     319: {
                        slidesPerView: 1,
                     },
                     550: {
                        slidesPerView: 2,
                     },
                     800: {
                        slidesPerView: 3,
                     },
                     1300: {
                        slidesPerView: 4,
                     },
                  }}
               >
                  {salons.map(salon => {
                     return (
                        <SwiperSlide key={salon.id}>
                           <Slide>
                              <img src={salon.image} alt="photo1" />
                              <TextInfo>
                                 <TopText>
                                    <div>
                                       <BsStar color='#BA7894' size={24} />
                                       {salon.rating}
                                    </div>
                                    <span>
                                       {salon.reviews} reviews
                                    </span>
                                 </TopText>
                                 <Info>
                                    <h4>{salon.title}</h4>
                                    <span>{salon.address}</span>
                                 </Info>
                                 <Button>BOOK NOW</Button>
                              </TextInfo>
                           </Slide>
                        </SwiperSlide>
                     )
                  })}
               </Swiper>
            </RecommendedEl>
         </Container>
      </RecommendedWrapper>
   )
};

export default Recommended;