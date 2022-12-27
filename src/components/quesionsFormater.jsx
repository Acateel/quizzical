import { nanoid } from 'nanoid'
import {decode} from 'html-entities'

export default function questionsFormater(data) {
    return data.results.map(cart => {
        // create new question object
        const newQuestion = { 
            id: nanoid(),
            question: decode(cart.question),
            answers: []
        }
        // safe correnct answer like an object
        const correctAnswer = {
            id: nanoid(),
            value: decode(cart.correct_answer),
            isSelected: false,
            isCorrect: true
        }
        // safe incorrect answers like an array of objects
        const incorrectAnswers = cart.incorrect_answers.map(answer => ({
            id: nanoid(),
            value: decode(answer),
            isSelected: false,
            isCorrect: false
        }))
        // push Answers in new question object and push correct answer in random index
        pushAnswersRandom()

        return newQuestion

        function pushAnswersRandom() {
            const answersCount = incorrectAnswers.length + 1
            const correctAnswerIndex = Math.round(Math.random() * (answersCount - 1))
            let incorrectAnswersIndex = 0
            for (let i = 0; i < answersCount; i++) {
                if (i === correctAnswerIndex) {
                    newQuestion.answers.push(correctAnswer)
                }
                else {
                    newQuestion.answers.push(incorrectAnswers[incorrectAnswersIndex])
                    incorrectAnswersIndex++
                }
            }
        }
    })
}