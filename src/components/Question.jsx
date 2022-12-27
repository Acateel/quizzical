import './Question.css'

export default function Question({value}){
    const incorrectAnswers = value.incorrect_answers.map(answer => (
        <p className='question--answer'>{answer}</p>
    ))
    const correctAnswer = <p className='question--answer'>{value.correct_answer}</p>

    return (
        <section className='question'>
            <h3 className='question--text'>{value.question}</h3>
            <div className='question--answer-list'>
                {correctAnswer}
                {incorrectAnswers}
            </div>
        </section>
    )
}