import './card.css';

interface Props {
  title: string;
  image: string;
  price: number;
}

export function Card({ title, image, price }: Props) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Valor: {price}</p>
    </div>
  );
}
