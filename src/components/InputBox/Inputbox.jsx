import React from "react";

function Inputbox({ options = [], price, setPrice, currency, setCurrency }) {
  return (
    <div className="p-6" key={currency}>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {currency && currency?.toUpperCase()}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="number"
          name="price"
          id="price"
          key={currency}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          value={price}
          onChange={(event) => {
            setPrice &&
              setPrice(
                event.target.value !== "" ? Number(event.target.value) : ""
              );
          }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            {currency}
          </label>
          <select
            id="currency"
            name="currency"
            key={currency}
            value={currency && currency?.toUpperCase()}
            onChange={(event) => {
              setCurrency && setCurrency(event.target.value);
            }}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            {options.map((option) => {
              return <option value={option?.toUpperCase()}>{option?.toUpperCase()}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
