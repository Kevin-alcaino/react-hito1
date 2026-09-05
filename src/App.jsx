import './App.css';
import Hero from './components/Hero';
import CardPizza from './components/CardPizza';

// Imágenes.
import margarita from './assets/margarita.png'
import marina from './assets/marina.png'
import veggie from './assets/veggie.png'
import carbonara from './assets/carbonara.png'
import caprichoza from './assets/caprichoza.png'
import prociutto from './assets/prociutto.png'

function App() {
  return (
    <>
     
      <Hero />
      
      <div className="cont-producto">
        <CardPizza
          img={margarita}
          name="Pizza Margarita"
          description="Una pizza clásica con tomate, mozzarella y albahaca"
          price={10.990}
        />
        <CardPizza
          img={marina}
          name="Pizza Marinara"
          description="Una pizza con salsa de tomate, ajo y orégano"
          price={8.990}
        />
        <CardPizza
          img={veggie}
          name="Pizza Veggie"
          description="Una pizza con una variedad de vegetales frescos"
          price={12.990}
        />
        <CardPizza
          img={carbonara}
          name="Pizza Carbonara"
          description="Una pizza con salsa carbonara, panceta y huevo"
          price={14.990}
        />
        <CardPizza
          img={caprichoza}
          name="Pizza Caprichoza"
          description="Una pizza con jamón, champiñones y aceitunas"
          price={14.990}
        />
        <CardPizza
          img={prociutto}
          name="Pizza Prosciutto"
          description="Una pizza con prosciutto, rúcula y parmesano"
          price={16.99}
        />  
      </div>
    </>
  )
}

export default App