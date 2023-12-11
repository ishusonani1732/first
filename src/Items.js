import React from "react";

const Items = (props) => (
    <>
        <div class="product-item">
            <div class="product-item-inner">
                <div class="product-img">
                    <a href="#"><img src={props.path} alt="architecto-beatae" /></a>
                </div>
                <div class="new-on-sale">
                    <p>new</p>
                    <strong>on sale</strong>
                </div>
                <div class="product-description">
                    <a href="#">
                        <p>{props.title}</p>
                    </a>
                    <span>${props.price}</span>
                    <button type="submit">ADD TO CART</button>
                </div>
            </div>
        </div>
    </>
);
export default Items;