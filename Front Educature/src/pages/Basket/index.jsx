import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";

function Basket() {
  const { basket, removeBasket, decreaseCount, increaseCount, getTotal } =
    useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="nav"></div>
      <div className="basket">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((x) => (
                <tr key={x._id}>
                  <td>
                    <i className={x.image}></i>
                  </td>
                  <td>{x.name}</td>
                  <td>${x.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-chevron-left"
                      onClick={() => decreaseCount(x)}
                    ></i>
                    {x.count}
                    <i
                      className="fa-solid fa-chevron-right"
                      onClick={() => increaseCount(x)}
                    ></i>
                  </td>
                  <td>${x.count * x.price}</td>
                  <td>
                    <button onClick={() => removeBasket(x)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <h2>Total Price: ${getTotal()}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
