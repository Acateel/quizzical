import Question from "./Question"
import './Quizzical.css'
import data from "../data"

export default function Quizzical() {
    const questionList = data.results.map((question)=>{
        return <Question value={question}/>
    })
    
    return(
        <main className="quizzical">
            {questionList}
        </main>
    )
}