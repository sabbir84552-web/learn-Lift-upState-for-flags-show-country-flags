import { useState } from "react";
import type { CountryType } from "../../Type";
import clsx from "clsx";

export interface CountryProps {
  country: CountryType;
  // handleVisitedCountries: (country: CountryType) => void;
  handleVisitedCountries: (country: CountryType) => void;
  handleVisitedFlags: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedFlags,
  handleVisitedCountries,
}: CountryProps) {
  const currencyList = country.currencies?.currencies
    ? Object.values(country.currencies.currencies)
    : [];
  const firstCurrencyName = currencyList[0]?.name;
  const languageList = country.languages?.languages
    ? Object.values(country.languages.languages).join(", ")
    : "N/A";

  const [visited, setVisited] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleVisited = () => {
    setIsLoading(true);
    setTimeout(() => {
      handleVisitedCountries(country);
      setVisited((prev) => !prev);

      setIsLoading(false);
    }, 600);
  };

  return (
    <div
      className={clsx("country", {
        "country-visited": visited,
        "country-border country-unvisited": !visited,
      })}
    >
      <h3>{country.name?.common}</h3>
      <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
      <p>Currency : {firstCurrencyName}</p>
      <p>Languages : {languageList}</p>
      <p>Capital : {country.capital?.capital?.[0]}</p>

      <button
        disabled={isLoading}
        onClick={handleVisited}
        className={clsx("px-3 py-1 rounded border-2 transition", {
          "bg-gray-300 text-gray-500 cursor-wait": isLoading,
          "bg-green-600 text-white border-green-700 cursor-pointer":
            visited && !isLoading,
          "bg-white text-red-300 border-blue-600 cursor-pointer":
            !visited && !isLoading,
        })}
      >
        {isLoading ? "Processing..." : visited ? "Visited" : "Mark as visited"}
      </button>
      <button
        onClick={() =>
          country.flags?.flags?.png &&
          handleVisitedFlags(country.flags.flags.png)
        }
      >
        add Flag as visited
      </button>
    </div>
  );
}
