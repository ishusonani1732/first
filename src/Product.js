import React from "react";
import Items from "./Items";

const Product = () => (
    <>
        <h2>Morning</h2>

        <div class="featured-collection">
        <div class="container">
            <div class="title">
                <span>New Arrival</span>
            </div>
            <div class="featured-proudct">
                <div class="row">
                    <div class="featured-proudct-inner">
                       <Items title="eius tempora1" price="379.00" path="assets/images/architecto-beatae.jpg"/>
                       <Items title="eius tempora2" price="420.00" path="assets/images/reprehenderit-beatae.jpg" />
                       <Items title="eius tempora3" price="290.00" path="assets/images/undeiste-numquam.jpg"/>
                       <Items title="eius tempora4" price="120.00" path="assets/images/aperiam-dolore.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
export default Product;