import React from "react"
import Question from "./Question"
import './Quizzical.css'
import data from "../data"
import questionsFormater from "./quesionsFormater"

export default function Quizzical() {
    const [allQuestions, setAllQuestions] = React.useState(questionsFormater(data))

    const questionList = allQuestions.map((question)=>{
        return <Question key={question.id} value={question}/>
    })

    return(
        <main className="quizzical">
            {questionList}
        </main>
    )
}