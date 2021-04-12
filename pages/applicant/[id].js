import React, {useContext, useState} from 'react'
import { useRouter } from 'next/router' 
import Link from "next/link"
import {Data} from "../../context/Data"

const SingleApplicant = () => {
    const router = useRouter()
    const data = useContext(Data)
    let applicant = data.find(app => app.id == router.query.id)
    const [firstName, setFirstName] = useState(applicant.firstName)
    const [lastName, setLastName] = useState(applicant.lastName)
    const [email, setEmail] = useState(applicant.email)
    const [jobs, setJobs] = useState(applicant.jobs)


    // **
    // *
    // create onClick, save updated user, add reducer and dispatch function 
    return (
        <div>
          <h1>Applicant Info</h1>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
          <p>{jobs.map((job,i) => <span key={i}>job</span> )}</p>
          <hr/>
          <Link href="/">
              <a>Home</a>
          </Link>
        </div>
    )
}

export default SingleApplicant

// export async  function getStaticProps(ctx){
//     return {
//         props:{
//             id:ctx.params.id
//         }
//     }
// }
// export async function getStaticProps(context){
//     let {id} = context.params
//     let applicant = initialData.filter(x => x.id == id)[0]
//     console.log(applicant)
//     return{
//         props:{
//             applicant
//         }
//     }
// }
// export async function getStaticPaths() {
//     let paths = initialData.map(x => {return {params:{id:x.id.toString()}}})
//     console.log(paths)
//     return{
//         paths,
//         fallback:false
//     }
// }