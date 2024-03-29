import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useContext, useState} from "react"
import {Data, Dispatcher} from "../context/Data"
import {v4 as uuid} from "uuid"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const data = useContext(Data)
  const dispatch = useContext(Dispatcher)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [jobs, setJobs] = useState([])

  const handleCheckBox = e =>{
    if(!jobs.includes(e.target.name)){
      setJobs([...jobs, e.target.name])

    }else{
      let newJobs = jobs.filter(x => x!=e.target.name)
      setJobs(newJobs)
    }
  }
  const handleSubmit = (e)=>{
    if(jobs.length ===0 || email.length === 0 || lastName.length ===0 ){ 
      alert("fill application correctly")
    }else{
      let id = Math.floor(Math.random() * 99999)
      dispatch({type:"add", payload:{ id, firstName, lastName, email, jobs,speakRating:"1", readingRating :"1", friendlinessRating:"1"}})
      // console.log(firstName,lastName,email, jobs)
      router.push(`/applicant/${id}`)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Employee System App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <h1>Employee System</h1>
        <hr/>
        <div >

        <label>
          Name:
          <input required={true} type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </label>
        <label>
          Last Name:
          <input required={true} type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input required={true} type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <hr/>
        
        <label>
          Cook:
          <input type="checkbox" name="cook" onClick={handleCheckBox}/>
        </label>
        <label>
          Server:
          <input type="checkbox" name="server" onClick={handleCheckBox} />
        </label>
        <label>
          Other:
          <input type="checkbox" name="other" onClick={handleCheckBox} />
        </label>
        <button  onClick={handleSubmit}>Apply</button>
        </div>
      </section>
      <section className={styles.listEmployees}>
        <h3>Appplicants List</h3>
        <ul>
          {data.length >0 && data.map(applicant => (
            <li key={applicant.id}>{applicant.firstName} {applicant.lastName} | {applicant.email} | <Link href={`/applicant/${applicant.id}`}><a>View/Edit</a></Link> </li>
          ))}
        </ul>
      </section>

    </div>
  )
}
