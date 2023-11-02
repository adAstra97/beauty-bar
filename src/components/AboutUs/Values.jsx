import { values } from "../../constants/data";
import { Value, ValuesEl } from "../../styles/AboutUs/ValuesStyle";


const Values = () => {
   return (
      <ValuesEl>
         <span>Our Values</span>
         <h2>The work values we thrive for</h2>
         <ul>
            {values.map(item => (
               <Value key={item.id}>
                  <img src={item.img} alt="value1" />
                  <div>
                     <span>{item.title}</span>
                     <p>{item.text}</p>
                  </div>
               </Value>
            ))}
         </ul>
      </ValuesEl>
   )
};

export default Values;