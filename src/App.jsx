import { useState } from "react";
import InputBox from "./component/input";
import usecurrencyinfo from "./hook/usecur";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = usecurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const convert = () => {
    setConvertAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div>
      <h1>Currency Converter</h1>

      <InputBox
        label="From"
        amount={amount}
        onAmountChange={(value) => setAmount(value)}
        onCurrencyChange={(value) => setFrom(value)}
        currencyOption={options}
        selectCurrency={from}
      />

      <button onClick={swap}>Swap</button>

      <InputBox
        label="To"
        amount={convertAmount}
        amountDisable={true}
        onCurrencyChange={(value) => setTo(value)}
        currencyOption={options}
        selectCurrency={to}
      />

      <button onClick={convert}>Convert</button>
    </div>
  );
}

export default App;
