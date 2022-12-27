import './Question.css'

export default function Question({value, handleSelect, hideAnswers}){
    const style = {
        backgroundColor: "#D6DBF5",
        borderColor: "#D6DBF5"
    }
    const greenStyle = {
        backgroundColor: "#94D7A2",
        borderColor: "#94D7A2"
    }
    const redStyle = {
        backgroundColor: "#F8BCBC",
        borderColor: "#F8BCBC",
        color: "#8F95B0"
    }
    const greyStyle = {
        backgroundColor: "none",
        borderColor: "#A1A9CD",
        color: "#8F95B0"
    }

    function getStyle(answer){
        if(hideAnswers) {
            return answer.isSelected ? style : {}
        } else {
            if(!answer.isSelected && !answer.isCorrect){
                return greyStyle
            } else if(answer.isSelected && !answer.isCorrect) {
                return redStyle
            } else {
                return greenStyle
            }
        }
    }

    const answersElements = value.answers.map(answer => (
        <p 
            key={answer.id} 
            className='question--answer'
            onClick={()=>handleSelect(value.id, answer.id)}
            style={getStyle(answer)}
        >
            {answer.value}
        </p>
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