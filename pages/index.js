import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useContext, useState} from "react"
import {Data} from "../context/Data"

export default function Home() {
  const data = useContext(Data)
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
    if(jobs.length  <1 || email.length === 0 || lastName.length ===0 ){ 
      e.stopPropagation()
    }
    console.log(firstName,lastName,email, jobs)
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
        <form>

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
          <input required={true} type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <hr/>
        <p>TEST CHECKBOX</p>
        {jobs.length && jobs.map((job,i) => <span key={i}>{job} | </span>)}
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
        <button onClick={handleSubmit}>Apply</button>
        </form>
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
