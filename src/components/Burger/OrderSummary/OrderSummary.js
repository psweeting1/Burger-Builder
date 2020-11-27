import React, {Component}from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be a class. Done for training purposes.

    //Reacts event listener.
    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                        : {this.props.ingredients[igKey]}
                    </li>
                )
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
