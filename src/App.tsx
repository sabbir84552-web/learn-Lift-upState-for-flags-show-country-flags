
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './Type';
import Countries from './components/countries/Countries';
// import type { Pattern } from './Pattern';
// import Desh from './components/Desh';
import Shor from './Shor';
import type { Cont } from './Types';
// console.log('countriesPromise');


// step-1 :creat a promise to load data 
const countriesPromise = async():Promise<CountryType[]>=>{
  const reponse=  await fetch('https://openapi.programming-hero.com/api/all')
  const data= await reponse.json()
  return data.countries;
} 
// const patn=async():Promise<Pattern[]> =>{
//   const kacaData=await fetch("https://openapi.programming-hero.com/api/all")
//   const pakadata=await kacaData.json()
//   return pakadata.countries;
// }
const DataTakingPromise=async():Promise<Cont[]>=>{
const KacaData=await fetch("https://openapi.programming-hero.com/api/all")
const Pakadata=await KacaData.json()
return Pakadata.countries;
}


function App() {

  return (
    <>
{/* <h2>Hwl world</h2> */}
<Suspense fallback={<p>loading</p>}>
<Shor Contity={DataTakingPromise()}></Shor>
</Suspense>
{/* <Suspense fallback={<p>hello load hoitase</p>}>
<Desh patn={patn()}></Desh>
</Suspense> */}
<Suspense fallback = {<p>loading..</p>}>
<Countries countriesPromise={countriesPromise()}></Countries>
</Suspense>
    </>
  )
}

export default App
