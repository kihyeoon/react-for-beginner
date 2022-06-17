import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinValue, setCoinValue] = useState("Select coin");
  const [price, setPrice] = useState("");
  const [coinSymbol, setCoinSymbol] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function onSelect(event) {
    setCoinSymbol(JSON.parse(event.target.value).symbol);
    setCoinValue(JSON.parse(event.target.value).price);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select id="selectBox" onChange={onSelect}>
          <option>Select coin</option>
          {coins.map((coin) => (
            <option
              key={coin.id}
              id={coin.symbol}
              value={`{"price":${coin.quotes.USD.price}, "symbol":"${coin.symbol}"}`}
            >
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price.toFixed(8)}
            </option>
          ))}
        </select>
      )}
      <hr />
      {coinValue === "Select coin" ? null : (
        <div>
          <label htmlFor="price">If you have $</label>
          <input
            value={price}
            id="price"
            onChange={onChangePrice}
            type="number"
            placeholder="type"
          />
          <h3>You can buy {price / coinValue} {coinSymbol}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
