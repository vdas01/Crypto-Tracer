import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../Config/api';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {
  const{ id } = useParams();
  const [coin, setCoin] = useState();
  const {currency,symbol} = CryptoState();

  const fetchCoin = async()=>{
    const {data} = await axios.get(SingleCoin(id));
  };
  useEffect(() => {
     fetchCoin();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
     
    </div>
  )
}

export default CoinPage
