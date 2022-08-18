import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <div className="cards">
      <Card
          img={process.env.PUBLIC_URL + '../images/Karbala.jpg'}
          rating={5.0}
          count={21}
          country="Karbala"
          price="856"
        />
        <Card
          img={process.env.PUBLIC_URL + '../images/Iraq.jpg'}
          rating={5.0}
          count={6}
          country="Iraq"
          title="lorem ipsum"
          price="156"
        />
        <Card
          img={process.env.PUBLIC_URL + '../images/norway.jpg'}
          rating={5.0}
          count={6}
          country="Norway"
          price="156"
        />
        <Card
          img={process.env.PUBLIC_URL + '../images/turkey.jpg'}
          rating={4.0}
          count={8}
          country="Turkey"
          price="456"
        />
        <Card
          img={process.env.PUBLIC_URL + '../images/canada.jpg'}
          rating={4.2}
          count={5}
          country="Canada"
          price="142"
        />
         <Card
          img={process.env.PUBLIC_URL + '../images/lefke.jpg'}
          rating={4.2}
          count={5}
          country="Lefke"
          price="142"
        />
      </div>
    </div>
  );
}

export default App;
