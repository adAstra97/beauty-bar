import { useState } from "react";
import { useForm } from 'react-hook-form';
import { ThreeDots } from "react-loader-spinner";

import { Container, ModalLoader } from "../../styles/Container";
import images from "../../constants/images";
import { Form, SubscribeEl, SubscribeRight, SubscribeWrapper } from "../../styles/Home/SubscribeStyle";
import ModalMessageEl from "../ModalMessage";

const Subscribe = () => {
   const [isOpenning, setIsOpenning] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const {register, handleSubmit, reset} = useForm();

   const onSubmit = (e) => {
      setIsLoading(true);

      setTimeout(() => {
         setIsLoading(false);
         setIsOpenning(true);
         reset();
      }, 1500);
   }

   return (
      <SubscribeWrapper>
         <Container>
            <SubscribeEl>
               <img src={images.subscribe} alt="subscribe" />
               <SubscribeRight>
                  <h2>Subscribe to newsletter</h2>
                  <p>Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.</p>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                     <input {...register("email", {
                        required: true,
                     })}
                     type="email"
                     placeholder="Enter your mail" />
                     <button type="submit">Subscribe</button>
                  </Form>
               </SubscribeRight>
            </SubscribeEl>
         </Container>
         {isLoading ? (
            <ModalLoader>
               <ThreeDots color="white"/>
            </ModalLoader>
         ) : isOpenning && (
               <ModalMessageEl text={'Thanks for your subscription!'} closeModal={() => setIsOpenning(false)}/>
         )}
      </SubscribeWrapper>
   );
};

export default Subscribe;