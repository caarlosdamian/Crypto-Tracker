import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
          <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-decoration-none">$ {coin.current_price}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <FaAngleDown />
          ) : (
            <FaAngleUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <TiDeleteOutline
          className="text-danger delete-icon"
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
        ></TiDeleteOutline>
      </li>
    </Link>
  );
};

export default Coin;
