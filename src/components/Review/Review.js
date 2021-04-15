import React, { useState , useEffect} from 'react';
import superStar from '../../data/data.json'
import Cart from '../Cart/Cart';
import Detail from '../Detail/Detail';

const Review = () => {

    const [you, setYou] = useState([]);

    useEffect(() => {
        setYou(superStar)
        // console.log(superStar)
    }, [])


    const first10 = superStar.slice(0, 10);
    // console.log(first10);
    const [superStars, setSuperStars] = useState(first10);

    const [cart, setCard] = useState([]);

    const handleAddPlayer = (star) => {
        // console.log('added', star)
        const newCard = [...cart, star];
        setCard(newCard);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h1 style={{textAlign: 'center'}}>Super Star : {superStars.length}</h1>
                {/* <h2 style={{textAlign: 'center'}}>this is Review</h2> */}
                {/* <h3 style={{textAlign: 'center'}}>Cart:{cart.length}</h3> */}
                <Cart cart1={cart}></Cart>
            </div>

            {
                superStars.map(st => <Detail handleAddPlayer={handleAddPlayer} star={st}></Detail>)
            }

        </div>
    );
};

export default Review;