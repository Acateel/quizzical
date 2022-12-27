import './Question.css'

export default function Question({value}){
    const answersElements = value.answers.map(answer => (
        <p key={answer.id} className='question--answer'>{answer.value}</p>
    ))

    return (
        <section className='question'>
            <h3 className='question--text'>{value.question}</h3>
            <div className='question--answer-list'>
                {answersElements}
            </div>
        </section>
    )
}