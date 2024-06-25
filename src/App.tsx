import './App.css'
import { Card } from './components/card/card'
import { RestaurantData } from './interface/RestaurantData'

function App() {
  const data: RestaurantData[] = [];

  return (
    <div className='container'>
        <h1>Restaurant</h1>
        <div className='card-grid'>
          {data.map((item) => (
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
       </div>
  )
}

export default App
