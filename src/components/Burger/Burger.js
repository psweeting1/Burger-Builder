import React from 'react';
import style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
     return (
          <div className={style.burger}>
               <BurgerIngredient type="bread-top"/>
               <BurgerIngredient type="seeds1"/>
               <BurgerIngredient type="cheese"/>
               <BurgerIngredient type="meat"/>
               <BurgerIngredient type="bread-bottom"/>
          </div>
     );
};

export default burger;