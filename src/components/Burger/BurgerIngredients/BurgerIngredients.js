import React, { Component } from 'react';
import style from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
     render() {
          let ingredient = null;

          switch (this.props.type) {
               case ('bread-bottom'):
               ingredient = <div className={style.breadBottom}></div>;
                    break;
               case ('bread-top'):
                    ingredient = (
                         <div className={style.breadTop}>
                              <div className={style.seeds1}></div>
                              <div className={style.seeds2}></div>
                         </div>
                    );
                    break;
               case ('meat'):
                    ingredient = <div className={style.meat}></div>
                    break;
               case ('cheese'):
                    ingredient = <div className={style.cheese}></div>
                    break;
               case ('bacon'):
                    ingredient = <div className={style.bacon}></div>
                    break;
               case ('salad'):
                    ingredient = <div className={style.salad}></div>
                    break;
               default:
                    ingredient = null;
          }
          return ingredient;
     }
}

BurgerIngredient.propTypes = {
     type: PropTypes.string.isRequired
}; 

export default BurgerIngredient;