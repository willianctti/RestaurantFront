import './App.css';
import { Card } from './components/card/card';
import { useUserRestaurantData } from './hooks/userRestaurantData';
import { RestaurantData } from './interface/RestaurantData';

function App() {
  const { data } = useUserRestaurantData();
  console.log('data', data);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', textShadow: '2px 2px 4px #000000' }}>La Carta Branca</h1>
      <div className="card-grid">
        {data?.map((item: RestaurantData) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
