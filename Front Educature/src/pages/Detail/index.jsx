import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Detail() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:9000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="card">
          <i className={products.image}></i>
          <i
            className={`${
              checkIsWishlist(products) ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }`}
            onClick={() => addRemoveWishlist(products)}
          ></i>
          <h3>{products.name}</h3>
          <p>{products.desc}</p>
          <p>${products.price}</p>
          <i className="fa-solid fa-cart-shopping" onClick={() => addBasket(products)}></i>
        </div>
      </div>
    </>
  );
}

export default Detail;
