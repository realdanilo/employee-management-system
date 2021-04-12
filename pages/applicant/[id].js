import React, {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router' 
import Link from "next/link"
import {Data, Dispatcher} from "../../context/Data"

const SingleApplicant = () => {
    const router = useRouter()
    const data = useContext(Data)
    const dispatch = useContext(Dispatcher)
    let applicant = data.find(app => app.id == router.query.id)
    const [speakRating, setSpeakRating] = useState(applicant.speakRating || "1")
    const [readingRating, setReadingRating] = useState(applicant.readingRating || "1")
    const [friendlinessRating, setFriendlinessRating] = useState(applicant.friendlinessRating || "1")
    
    useEffect(()=>{
        console.log(applicant.speakRating)
        applicant == undefined ? router.push("/"): null
    })
    const handleUpdate = e =>{
        dispatch({type:"update", id: applicant.id, payload:{speakRating, readingRating, friendlinessRating}})
    }
    const handleDelete = e =>{
        if(confirm("Do you want to delete user?")){
            router.push("/").then(()=> dispatch({type:"delete", id:applicant.id}))
        }
    }
    return (
        <div>
          <h1>Applicant Info</h1>
          <p>First Name: {applicant.firstName}</p>
          <p>Second Name: {applicant.lastName}</p>
          <p>Email: {applicant.email}</p>
          <p>Jobs Applied: {applicant.jobs.map((job,i) => <span key={i}>{job} |</span> )}</p>
          <hr/>
          <h3>Ratings</h3>
          <label>
            Speaking: 
            <select value={speakRating} onChange={(e)=>setSpeakRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </label>
          <br/>
          <label>
            Reading: 
            <select value={readingRating} onChange={(e)=>setReadingRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </label>
          <br/>
          <label>
            Friendliness: 
            <select value={friendlinessRating} onChange={(e)=>setFriendlinessRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </label>
          <hr/>
          <button onClick={handleUpdate}>Update</button>
          <Link href="/">
              <a style={{display:"inline-block", margin:"0 0 0 10px", background:"black", color:"white", padding:"10px 15px"}}>Home</a>
          </Link>
          <hr/>
          <h4>Status: </h4>{(parseInt(speakRating) + parseInt(readingRating) + parseInt(friendlinessRating))/3 >=3 ? <p>HIRED</p>: <p>Not Hired</p> }
          <hr/>
          <button onClick={handleDelete}>Delete User</button>
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