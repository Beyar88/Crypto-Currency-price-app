import React from "react";
import Card from "./components/priceCard";
import Footer from "./components/footer";
import ReactLoading from "react-loading";
import "./app.css";

const App = () => {
  const [coins, setCoins] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);
  const [searchCoin, setsearchCoin] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setisloaded(true);
        const coins = data.coins;
        const bitcoin = coins[0];
        bitcoin.icon = "https://cdn.wallpapersafari.com/73/75/rFfJGY.jpg";
        setCoins(coins);
      });
  }, []);

  let filteredCoin =
    coins?.filter((coin) => {
      return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
    }) || coins;

  if (!isloaded) {
    return (
      <ReactLoading
        className="loading-icon"
        type={"spin"}
        color={"blueviolet"}
        height={100}
        width={100}
      />
    );
  } else
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
                <Card
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
