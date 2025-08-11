import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

const Home = () => {

  const {allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setdisplayCoin] = useState([]);  //this is the copy of first 

const[show,setShow]=useState(false);

  useEffect(() => {
    setdisplayCoin(allCoin)
  }, [allCoin]);
  
  const showHandler=()=>{
    setShow(prev=>!prev);
  }
  
  return (
    <div className="home">
      <div className="desc">
        <h2>
          Largest <br />
          Crypto Marketplace
        </h2>
        <p>
          Welcome to the world's largest cryptocurrency marketplace <br />
          Sign up to explore more about crypto
        </p>

      </div>

      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" name="currency" placeholder="Search Crypto " />
        <button type="submit" className="search"> Search </button>
      </form>
      
        <button className="show-btn" onClick={showHandler}> {show?"Hide coins":"Explore Coins"}</button>

      <div className="crypto-table">
        <div className="table-layout">

          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
       
       
        {show &&
          displayCoin.slice(0, 10).map((item, index) =>
          (
            <div className="table-layout" key={index} >

              <p>{item.market_cap_rank} </p>

              <div className="coin">
                <img src={item.image} alt="coin" className="logo1" />
                <p> {item.name}  - {item.symbol.toUpperCase()}</p>
              </div>

              <p>
                {currency.symbol} {item.current_price.toLocaleString()}</p>
              <p>{Math.floor( item.price_change_percentage_24h*100)/100}</p>
              <p>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          )
          )
          }
        

      </div>

    </div>
  );
};

export default Home;
