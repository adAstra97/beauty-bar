import { ModalMessage } from "../styles/ModalStyle";

const ModalMessageEl = ({text, closeModal}) => {
   return (
      <ModalMessage>
         <div>
            <span>{text}</span>
            <button onClick={closeModal}>Close</button>
         </div>
      </ModalMessage>
   )
};

export default ModalMessageEl;