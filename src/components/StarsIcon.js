import React, {useState} from "react";
import { FaStar } from 'react-icons/fa';
const StarsIcon = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

    return( 
        <div>
         {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            

            return( 
              <label>  
                    <input 
                        type='radio' 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)} 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseOut={() => setHover(null)}
                    />
                    <FaStar 
                     className="star" 
                     color={ratingValue <= (hover || rating) ? 'yellow' : 'gray'} 
                     size ={20} 
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}
                    />
              </label>
            );
         })}
         
        </div>
    );
}

export default StarsIcon;