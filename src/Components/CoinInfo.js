import React,{useState,useEffect} from 'react'
import { HistoricalChart } from '../Config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios'
import { CircularProgress,createTheme, makeStyles,ThemeProvider} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  container:{
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
  },
  },
}))

const CoinInfo = ({coin}) => {
    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState(1);
    const{currency} = CryptoState();
    const fetchHistoricData = async()=>{
        const {data} = await axios.get(HistoricalChart(coin.id,days,currency))
        setHistoricalData(data.prices);
    }
    useEffect(() => {
       fetchHistoricData();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency,days]);

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
    
     
      const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
       <div className={classes.container}>
           {
            !historicalData ? (
                <CircularProgress style={{color:"gold"}} size={250} thickness={1}/>
            ):(
                <>

                </>
            )
           }
       </div>
    </ThemeProvider>
  )
}

export default CoinInfo
