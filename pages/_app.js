import {useReducer} from "react"
import {v4 as uuid} from "uuid"
import '../styles/globals.css'
import {Data, Dispatcher} from "../context/Data"
import reducer from "../utils/reducer"
const initial = [
  {
    id:uuid(),
    firstName:"danilo",
    lastName:"mera",
    email:"email@example.com",
    jobs:["cook","server", "other"]
  }
]
function MyApp({ Component, pageProps }) {
  const [data, setData] = useReducer(reducer, initial)
  return (
    <Dispatcher.Provider value={setData}>
      <Data.Provider value={data}>
       <Component {...pageProps} />
      </Data.Provider>
    </Dispatcher.Provider>
  )
}

export default MyApp
