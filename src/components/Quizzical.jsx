import React from "react"
import Question from "./Question"
import './Quizzical.css'
import data from "../data"
import questionsFormater from "./quesionsFormater"

export default function Quizzical() {
    const [allQuestions, setAllQuestions] = React.useState(questionsFormater(data))
    const [isPlaying, setIsPlaying] = React.useState(true)

    function togglePlay() {
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }

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
            <button 
                className="check-answers"
                onClick={togglePlay}
            >
                Check answers
            </button>
        </main>
    )
}