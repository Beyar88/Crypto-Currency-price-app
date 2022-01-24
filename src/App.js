import React from "react";
import Cart from "./components/priceCart";
import "./app.css";
function App() {
  const [coins, setcoins] = React.useState();
  const [searchCoin, setsearchCoin] = React.useState("");
  React.useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        if (response) {
          console.log("success");
        } else {
          console.log("unseccessfull");
        }
        return response.json();
      })
      .then((data) => {
        const coins = data.coins;
        setcoins(coins);
        console.log(coins);
      });
  }, []);
  let filteredCoin =
    coins?.filter((coin) => {
      return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
    }) || coins;
  return (
    <div className="app">
      <header className="app-header">
        <h1>Get live price of your favorite crypto currency</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Coins ...."
          onChange={(event) => {
            setsearchCoin(event.target.value);
          }}
        ></input>
      </header>
      <div className="container">
        {coins &&
          filteredCoin.map((coin) => {
            return (
              <Cart
                name={coin.name}
                image={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
                key={coin.rank}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
