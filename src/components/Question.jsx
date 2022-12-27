import './Question.css'

export default function Question(){
    return (
        <section className='question'>
            <h3 className='question--text'>How would one say goodbye in Spanish?</h3>
            <div className='question--answer-list'>
                <p className='question--answer'>Adios</p>
                <p className='question--answer'>Hola</p>
                <p className='question--answer'>Au Revoir</p>
                <p className='question--answer'>Salir</p>
            </div>
        </section>
    )
}