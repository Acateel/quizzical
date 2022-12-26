import './Intro.css'

export default function Intro() {
    return (
        <div className="intro">
            <h1 className='intro--title'>Quizzical</h1>
            <p className='intro--description'>Some desctiprion if needed</p>
            <button className='intro--start'>Start quiz</button>
        </div>
    )
}