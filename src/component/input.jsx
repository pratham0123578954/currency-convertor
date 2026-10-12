function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currentDisable = false,
  className = "",
}) {
  return (
    <div className={`${className} box1`}>
      <div className="box2">

        <label className="inputlabel">
          {label}
        </label>

        <input
          className="box3"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(Number(e.target.value))
          }
        />

      </div>

      <div className="box4">

        <p className="para">
          Currency Type
        </p>

        <select
          className="select"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
          disabled={currentDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default InputBox;