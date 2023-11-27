
import { useState } from "react";
import {BsPerson} from "react-icons/bs";
import {MdOutlineMailOutline} from "react-icons/md";
import {GrPhone} from "react-icons/gr";
import {FiBookOpen, FiEdit} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";

import ErrorMessage from "../ErrorMessage";
import ModalMessageEl from "../ModalMessage";

import { Container, ModalLoader } from "../../styles/Container";
import { Button, ContactFormEl, ContactFormWrapper, Form } from "../../styles/Contacts/ContactFormStyle";

const ContactForm = () => {
   const [isOpenning, setIsOpenning] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const {
      register,
      formState: {errors},
      handleSubmit,
      reset,
   } = useForm();

   const onSubmit = (e) => {
      setIsLoading(true);

      setTimeout(() => {
         setIsLoading(false);
         setIsOpenning(true);
         reset();
      }, 1500);
   }

   return (
      <ContactFormWrapper>
         <Container>
            <ContactFormEl>
               <span>SCHEDULE YOUR PRESENCE</span>
               <h2>Get in touch</h2>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
               <Form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                     <BsPerson size={24} color="#141414"/>
                     <input
                        {...register('name',  {
                           required: 'Name is required',
                        })}
                        type="text"
                        placeholder="Name"
                     />
                  </div>
                  {errors.name && <ErrorMessage message={errors.name.message}/>}
                  <div>
                     <MdOutlineMailOutline size={24} color="#141414"/>
                     <input
                        {...register('email', {
                           required: 'Email is required',
                           pattern: {
                              value: /^[a-z][\w.-]+@([\w-]+\.)+[a-z]{2,11}$/gi,
                              message: 'Please enter a valid email',
                           },
                        })}
                        type="email"
                        placeholder="Email"/>
                  </div>
                  {errors.email && <ErrorMessage message={errors.email.message}/>}
                  <div>
                     <GrPhone size={24} color="#141414"/>
                     <input
                        {...register('phone', {
                           required: 'Phone is required',
                           pattern: {
                              value: /^[\d\+][\d\s()-]{5,20}$/gi,
                              message: 'Please enter your phone number',
                           },
                        })}
                        type="phone"
                        placeholder="Phone"/>
                  </div>
                  {errors.phone && <ErrorMessage message={errors.phone.message}/>}
                  <div>
                     <FiBookOpen size={24} color="#141414"/>
                     <input
                        {...register('service', {
                           required: 'Enter the desired service'
                        })}
                        type="text"
                        placeholder="Service You Need"/>
                  </div>
                  {errors.service && <ErrorMessage message={errors.service.message}/>}
                  <div>
                     <FiEdit size={24} color="#141414"/>
                     <textarea
                        {...register('note', {
                           required: 'Enter the note'
                        })}
                        placeholder="Any Note For Us"></textarea>
                  </div>
                  {errors.note && <ErrorMessage message={errors.note.message}/>}
                  <Button type="submit">Submit</Button>
               </Form>
            </ContactFormEl>
         </Container>
         {isLoading ? (
            <ModalLoader>
               <ThreeDots color="white"/>
            </ModalLoader>
         ) : isOpenning && (
               <ModalMessageEl text={'Thanks for your message!'} closeModal={() => setIsOpenning(false)}/>
         )}
      </ContactFormWrapper>
   )
};

export default ContactForm;