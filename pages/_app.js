import {useReducer} from "react"
// import {v4 as uuid} from "uuid"
import '../styles/globals.css'
import {Data, Dispatcher} from "../context/Data"
import reducer from "../utils/reducer"
import initialData from "../utils/data"

function MyApp({ Component, pageProps }) {
  const [data, setData] = useReducer(reducer, initialData)
  return (
    <Dispatcher.Provider value={setData}>
      <Data.Provider value={data}>
       <Component {...pageProps} />
      </Data.Provider>
    </Dispatcher.Provider>
  )
}

export default MyApp
