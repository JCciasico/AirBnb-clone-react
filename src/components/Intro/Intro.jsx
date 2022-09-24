import photoGrid from '../../assets/photo-grid.png'
import './Intro.css'

export default function Intro() {
    return (
        <section className='intro-section'>
            <img src={photoGrid} className="intro--photo" />
            <h1 className='intro--title'>Online Experiences</h1>
            <p className='intro--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}