import React from 'react';

const Cart = (props) => {
    const cart2 = props.cart1;

    const ReviewStyle = {
        textAlign: 'center'
    }

    const totalSalary = cart2.reduce( (sum, player) => sum + player.salary, 0);
    return (
        <div>
            <h2 style={ReviewStyle}>Select : {cart2.length}</h2>

            <ul style={ReviewStyle}>
                {
                    cart2.map(player2 => <h4>Super Star : {player2.name} , Salary : {player2.salary}</h4>)
                    // cart2.map(player2 => <li>SuperStars : {player2.name} Salary : {player2.salary}</li>)
                }
            </ul>

            <h2 style={ReviewStyle}>Total Salary : {totalSalary}</h2>
        </div>
    );
};

export default Cart;