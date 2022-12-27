import React from "react"
import Question from "./Question"
import './Quizzical.css'
import data from "../data"
import questionsFormater from "./quesionsFormater"

export default function Quizzical() {
    const [allQuestions, setAllQuestions] = React.useState(questionsFormater(data))
    const [isPlaying, setIsPlaying] = React.useState(true)

    React.useEffect(()=>{
        if(isPlaying) {
            fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
                .then(res => res.json())
                .then(data => setAllQuestions(questionsFormater(data)))
        }
    }, [isPlaying])

    function togglePlay() {
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }

    function selectAnswer(questionId, answerId){
        if(!isPlaying){
            return
        }
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

    function score(){
        let count = 0;
        for (let i = 0; i < allQuestions.length; i++) {
            let question = allQuestions[i] 
            for (let j = 0; j < question.answers.length; j++) {
                let answer = question.answers[j]
                if(answer.isSelected && answer.isCorrect){
                    count++
                }
            }
        }
        return count
    }

    const questionList = allQuestions.map((question)=>{
        return (
            <Question 
                key={question.id} 
                value={question}
                handleSelect={selectAnswer}
                hideAnswers={isPlaying}
            />
        )
    })

    return(
        <main className="quizzical">
            {questionList}
            <div className="check-answers">
                {!isPlaying && <p className="check-answers--score">You scored {score()}/{allQuestions.length} correct answers</p>}
                <button 
                    className="check-answers--button"
                    onClick={togglePlay}
                >
                    {isPlaying ? "Check answers" : "Play again"}
                </button>
            </div>
        </main>
    )
}