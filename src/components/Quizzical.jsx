import Question from "./Question"
import './Quizzical.css'
import data from "../data"
import questionsFormater from "./quesionsFormater"

export default function Quizzical() {
    const questionList = data.results.map((question)=>{
        return <Question value={question}/>
    })

    console.log(questionsFormater(data))

    return(
        <main className="quizzical">
            {questionList}
        </main>
    )
}