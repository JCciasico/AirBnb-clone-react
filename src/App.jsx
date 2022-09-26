import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Cards from './components/Cards/Card'
import data from './data/sampleData'

function App() {
  const sampleData = data.map(per => {
    return <Cards 
            key = {per.id}
            image = {per.coverImg}
            rating = {per.stats.rating}
            reviewCount = {per.stats.reviewCount}
            country = {per.location}
            title = {per.title}
            price = {per.price}
          />
  })

  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <div className="cards-list">
          {sampleData}
        </div>
    </div>
  )
}

export default App
