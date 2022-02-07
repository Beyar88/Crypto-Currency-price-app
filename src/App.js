import React from "react";
import Cart from "./components/priceCart";
import Footer from "./components/footer";
import "./app.css";

const App = () => {
  const [coins, setCoins] = React.useState([]);

  const [searchCoin, setsearchCoin] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const coins = data.coins;
        const bitcoin = coins[0];
        bitcoin.icon = "https://cdn.wallpapersafari.com/73/75/rFfJGY.jpg";
        const slicedCoins = coins.slice(1);
        const coinList = [bitcoin, ...slicedCoins];
        setCoins(coinList);
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
        {filteredCoin.length > 0 &&
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
      <Footer />
    </div>
  );
};

export default App;
