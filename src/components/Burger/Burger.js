import React from 'react';
import style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    //Keys returns an array which we can now map
    const transformedIngredients = Object.keys(props.ingredients)
        //igKey is the key in the map used in the array
        .map(igKey => {
            //Use the spread operator (...)
            return [...Array(props.ingredients[igKey])]
                // The _ is blank, don't care about that argument, but we care about index (i)
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
        });
     return (
          <div className={style.burger}>
               <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
               <BurgerIngredient type="bread-bottom"/>
          </div>
     );
};

export default burger;