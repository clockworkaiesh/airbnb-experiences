import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js'
console.log(data)
function App() {

  const cards = data.map(function(item){
    return(
      <Card key = {item.id}
            // img = {item.coverImg}
            // title = {item.title}
            // rating = {item.stats.rating}
            // count = {item.stats.reviewCount}
            // location = {item.location}
            // price = {item.price}
            // openSpots = {item.openSpots}

            {...item}
      />
    )
  })

  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
