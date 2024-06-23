import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputbox from "./components/InputBox/Inputbox";
import { getCurrencyInfo } from "./hooks/getCurrencyInfo";

function App() {
  console.log("printed after data");
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [toCurrency, setToCurrency] = useState("usd");

  const options = getCurrencyInfo(fromCurrency.toLowerCase());

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromPrice(toPrice);
    setToPrice(fromPrice);
  };

  const calculateToPrice = () => {
    setToPrice(()=> {
      return options[toCurrency.toLowerCase()] * fromPrice
    });
  };

  useEffect(() => {
    calculateToPrice();
  }, [toPrice, toCurrency, fromCurrency, fromPrice, options]);

  return (
    <>
      <h1 className="text-3xl text-center mt-4 font-semibold">
        Currency Converter
      </h1>
      <div className="w-2/5 h-80 rounded-xl m-auto mt-10 bg-lime-200">
        <Inputbox
          options={Object.keys(options)}
          currency={fromCurrency}
          price={fromPrice}
          setPrice={setFromPrice}
          setCurrency={setFromCurrency}
        />

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gray-600 text-white rounded-xl py-2 px-5 hover:bg-gray-700"
            onClick={swapCurrency}
          >
            Swap
          </button>
        </div>
        <Inputbox
          options={Object.keys(options)}
          currency={toCurrency}
          price={toPrice}
          setPrice={setToPrice}
          setCurrency={setToCurrency}
        />
      </div>
    </>
  );
}

export default App;
