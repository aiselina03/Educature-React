import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Cards() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null)
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function search(e) {
    setInput(e.target.value);
  }

  function lower(data) {
    if (typeof data==="string") {
      return data.toLowerCase()
    }
    return data
  }

  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="header">
            <h1>Features That Make Us Hero</h1>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. <br /> You may see some for
              as low as $.17 each.
            </p>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={search}
          />
          <div className="buttons">
            <button onClick={()=>setSort({property: "name", asc: true})}>A-Z</button>
            <button onClick={()=>setSort({property: "name", asc: false})}>Z-A</button>
            <button onClick={()=>setSort(null)}>Default</button>
            <button onClick={()=>setSort({property: "price", asc: true})}>Artan</button>
            <button onClick={()=>setSort({property: "price", asc: false})}>Azalan</button>
          </div>
          <div className="cards">
            {products
              .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
              .sort((a,b) => {
                if (sort && sort.asc) {
                 return lower(a[sort.property]) > lower(b[sort.property]) ? 1 : lower(b[sort.property]) > lower(a[sort.property]) ? -1 : 0
                }
                else if (sort && sort.asc===false) {
                  return lower(a[sort.property]) <lower(b[sort.property]) ? 1 : lower(b[sort.property]) < lower(a[sort.property]) ? -1 : 0
                }
                else{
                  return 0
                }
              })
              .map((x) => (
                <div className="card" key={x._id}>
                  <i className={x.image}></i>
                  <i className={`${checkIsWishlist(x) ? "fa-solid fa-heart" : "fa-regular fa-heart"}`} onClick={()=>addRemoveWishlist(x)}></i>
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
      </div>
    </>
  );
}

export default Cards;
