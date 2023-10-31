import { Container } from "../../styles/Container";

import images from "../../constants/images";
import { Form, SubscribeEl, SubscribeRight, SubscribeWrapper } from "../../styles/Home/SubscribeStyle";
import { ModalMessage } from "../../styles/ModalStyle";
import { useState } from "react";
import { useForm } from 'react-hook-form';

const Subscribe = () => {
   const [isOpenning, setIsOpenning] = useState(false);
   const {register, handleSubmit, reset} = useForm();

   const onSubmit = (e) => {

      setTimeout(() => {
         setIsOpenning(true);
         reset();
      }, 2000);
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
         {isOpenning && (
            <ModalMessage>
               <div>
                  <span>Thanks for your subscription!</span>
                  <button onClick={() => setIsOpenning(false)}>Close</button>
               </div>
            </ModalMessage>
         )}
      </SubscribeWrapper>
   );
};

export default Subscribe;