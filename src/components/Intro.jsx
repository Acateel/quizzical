import './Intro.css'

export default function Intro({handleClick}) {
    return (
        <div className="intro">
            <h1 className='intro--title'>Quizzical</h1>
            <p className='intro--description'>Choice correct answers!</p>
            <button 
                className='intro--start'
                onClick={() => {handleClick(false)}}
            >
                Start quiz
            </button>
        </div>
    )
}