import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { NavLink} from "react-router-dom";
import "./style.scss";

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, checkIsWishlist, addRemoveWishlist } =
    useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="nav"></div>
      <div className="wishlist">
        <div className="cards">
          {wishlist.map((x) => (
            <div className="card" key={x._id}>
              <i className={x.image}></i>
              <i
                className={`${
                  checkIsWishlist(x)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }`}
                onClick={() => addRemoveWishlist(x)}
              ></i>
              <h3>{x.name}</h3>
              <p>{x.desc}</p>
              <p>${x.price}</p>
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => addBasket(x)}
              ></i>
              <button>
                <NavLink to={"/detail/" + x._id}>Detail</NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
