import { use, useState } from "react";
import type { CountryType } from "../../Type";
import Country from "../country/Country";
import "../country/country.css";
import "./Countries.css";
export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  // const [visitedCountries,setVisitedCountries]=useState<CountryType[]>([])
  // const handleVisitedCountries=(country:CountryType):void=>{
  // const newVisitedCountries=[...visitedCountries,country]
  // setVisitedCountries(newVisitedCountries)
  // }
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
  const handleVisitedCountries = (country: CountryType): void => {
    const isExist = visitedCountries.find(
      item => item.ccn3?.ccn3 === country.ccn3?.ccn3,
    );
   // .find() /.some() methode non primitive data type ar khetre kaj kore 
   
    if (isExist) {
      const remainvisitedCountry = visitedCountries.filter(
        (c) => c.ccn3?.ccn3 !== country.ccn3?.ccn3,
      );
      setVisitedCountries(remainvisitedCountry);
    }

    // bad way to check object /array check
    // if (visitedCountries.includes(country)) {
    //   const remainvisitedCountry=visitedCountries.filter((uposthitupadan)=>uposthitupadan!==country)
    //   setVisitedCountries(remainvisitedCountry)
    // }
    else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);
  const handleVisitedFlags = (flag: string): void => {
    console.log("flag dekhi", flag);

    // if (visitedFlags.includes(flag)) {
    //   setVisitedFlags((prev) => [...prev, flag]);
    //   return;
    // } else {
    //   const newVisitedFlag = [...visitedFlags, flag];
    //   setVisitedFlags(newVisitedFlag);
    // }// atar shortcultt
    // setVisitedFlags((purberta)=>purberta.includes(flag)?purberta:[...purberta,flag])
    // setVisitedFlags((purberta)=>purberta.includes(flag)?purberta.filter((items)=>items!==flag):[...purberta,flag])

    // setVisitedFlags((agerta)=>agerta.includes(flag)?agerta.filter
    // ((uposthitUpadan)=>uposthitUpadan !==flag):[...agerta,flag])==> ata short cutt chilo



    // primitive data type (sting,number,boolean,array) atar khetre .includes() methode 100% good way 
    if (visitedFlags.includes(flag)) {
      const remainVisitedFlags = visitedFlags.filter(
        (uposthititems) => uposthititems !== flag,
      );
      setVisitedFlags(remainVisitedFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }

    // setVisitedFlags((prev)=>
    // prev.includes(flag)?prev:[...prev,flag]
    // )
    // visitedFlags.includes(flag)?`${return}`:`${setVisitedFlags(newVisitedFlag)}`
  };
  console.log(`visited countries dekhi`, visitedCountries);

  console.log(`flag gula dekhi ${visitedFlags}`);

  const countries = use(countriesPromise);

  console.log(countries);

  return (
    <>
      <h3>Countries koto gula ase setar length dekhi : {countries?.length}</h3>
      <h4>visited countries ar doirgo : {visitedCountries?.length}</h4>
      <h4>Visited countru flags ar doirgo :{visitedFlags?.length}</h4>
      <div className="">
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.ccn3?.ccn3}>{country.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="countriesFlag">
        {visitedFlags.map((items,index) => (
          <img key={index} src={items} alt="visited Flag"></img>
        ))}
      </div>
      {/* <h3>{countries.map((items)=><h4 className="border border-blue-600">{items.name.common}</h4>)}</h3>
        <h3>{countries.map((items)=><h4>{items.name.official}</h4>)}</h3> */}
      {/* <div className="">
            {countries.map((items,index)=>(
                <div key={index} style={{ border: '5px solid #ccc'  , padding: '10px', borderRadius: '8px' }}>
                        <h4>Common Name: {items.name.common}</h4>
                        <p>Official Name: {items.name.official}</p>
                    </div>
            ))}
        </div> */}
      <ul className="Countries">
        {countries.map((items) => (
          <Country
            handleVisitedFlags={handleVisitedFlags}
            handleVisitedCountries={handleVisitedCountries}
            key={items.ccn3?.ccn3}
            /**uniqe key set kora hoilo */ country={items}
          ></Country>
        ))}
      </ul>

      {/* <div className="Countries">
        {countries.map((items, index) => (
          <div className="country" key={index}>
            <h4 className="">common name:{items.name.common}</h4>
            <h5 className="">official:{items.name.official}</h5>
            <p>{items.capital.capital}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}
