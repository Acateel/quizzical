import React from "react"
import Question from "./Question"
import './Quizzical.css'
import data from "../data"
import questionsFormater from "./quesionsFormater"

export default function Quizzical() {
    const [allQuestions, setAllQuestions] = React.useState(questionsFormater(data))

    function selectAnswer(questionId, answerId){
        console.log(questionId, answerId)
        setAllQuestions(prevAllQuestions => 
            prevAllQuestions.map(question => 
                questionId===question.id ? 
                {
                    ...question,
                    answers: question.answers.map(prevAnswer => ({
                        ...prevAnswer,
                        isSelected: answerId===prevAnswer.id ? true : false
                    }))
                } :
                question
            )
        )
    }

    const questionList = allQuestions.map((question)=>{
        return (
            <Question 
                key={question.id} 
                value={question}
                handleSelect={selectAnswer}
            />
        )
    })

    return(
        <main className="quizzical">
            {questionList}
            <button className="check-answers">Check answers</button>
        </main>
    )
}