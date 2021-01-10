import React from 'react'
import PropTypes from 'prop-types';

const Congrats = (props) => {
   if(props.success){
      return(
          <div data-test="component-congrats">
              <span data-test="congrats-message" className="alert alert-success mt-5">
                  Congratulation! You Guessed Word
              </span>
          </div>
      )
   } else{
       return (
           <div data-test="component-congrats"></div>
       )
   }
}

Congrats.propTypes = {
    success:PropTypes.bool.isRequired
}

export default Congrats
