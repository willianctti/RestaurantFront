import './card.css'
interface Props {
    title: string
    image: string
    price: number
}
export function Card({ title, image, price }: Props) {
    return (
        <div className='card'>
            <img src="" alt="" />
            <h2></h2>
            <p>Valor:</p>
        </div>
    )
}