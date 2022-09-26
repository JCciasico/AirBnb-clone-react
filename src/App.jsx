import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Cards from './components/Cards/Card'
import data from './data/sampleData'

function App() {
  const sampleData = data.map(per => {
    return <Cards 
            image = {per.image}
            rating = {per.rating}
            reviewCount = {per.reviewCount}
            country = {per.country}
            title = {per.title}
            price = {per.price}
          />
  })

  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        {sampleData}
    </div>
  )
}

export default App
