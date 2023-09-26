import CoinSymbol from "./components/CoinSymbol";
import InputCoin from "./components/InputCoin";
import SelectCoin from "./components/SelectCoin";
import CoinLayout from "./layout/CoinLayout";
import Button from "./components/Button";
import CircularButton from "./components/CircularButton";
import { ChangeEvent, useEffect, useState } from "react";


//`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UKSG38Kf4cxtqPqiQcKK4pmmN1LoeRYojFYGsU2t`


export default function App() {
  const [coin1, setCoin1] = useState(0)
  const [coin2, setCoin2] = useState(0)
  const [rates, setRates] = useState({})
  const [rate1, setRate1] = useState(1)
  const [rate2, setRate2] = useState(1)


  useEffect(function() {
    async function fetchData() {
      const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UKSG38Kf4cxtqPqiQcKK4pmmN1LoeRYojFYGsU2t`)
      const data = await res.json()
      setRates(data.data)
    } fetchData()
  },[])

  useEffect(function() {
    setCoin2((coin1*(rate2/rate1)).toFixed(2))
  },[coin1,rate1, rate2]) 

  function handleCoin1(e: ChangeEvent<HTMLInputElement>) {
    setCoin1(+e.target.value)
  }

  function handleCoin2(e: ChangeEvent<HTMLInputElement>) {
    setCoin2(+e.target.value)
  }

  function handleRate1(e: ChangeEvent<HTMLSelectElement>) {
    setRate1(+e.target.value)
  }

  function handleRate2(e: ChangeEvent<HTMLSelectElement>){
    setRate2(+e.target.value)
  }


  return (
    <div className="font-Poppins flex flex-col gap-8 justify-center items-center bg-gradient-to-b from-teal-500 to-white h-screen">
      <h1 className="font-Montserrat text-5xl text-white">Currency Converter</h1>
      <CoinLayout>
        <div className="relative">
          <CoinSymbol>$</CoinSymbol>
          <InputCoin value={coin1} onChange={handleCoin1} />
        </div>
        <SelectCoin value={rate1} onChange={handleRate1}>
          {Object.entries(rates).map(([key,value],i) => <option key={key} value={value}>{key}</option>)}
        </SelectCoin>
      </CoinLayout>
      <CircularButton/>
      <CoinLayout>
        <div className="relative">
          <CoinSymbol>$</CoinSymbol>
          <InputCoin value={coin2} onChange={handleCoin2} />
        </div>
        <SelectCoin value={rate2} onChange={handleRate2}>
          {Object.entries(rates).map(([key,value],i) => <option key={key} value={value}>{key}</option>)}
        </SelectCoin>
      </CoinLayout>
      <div className="grid grid-cols-3 gap-3 bg-white p-5 rounded-lg">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>&larr;</Button>
      </div>
    </div>
  )
}

// https://dribbble.com/shots/2965076-Day-75-Currency-Converter
