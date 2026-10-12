import { useEffect, useState } from "react";

function usecurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url =
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("API DATA:", res);
        setData(res[currency]);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }, [currency]);

  return data;
}

export default usecurrencyinfo;
