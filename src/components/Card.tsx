export interface Data {
  type: string;
  price: string;
  features: string[];
  isBig: boolean;
}

export type CardType = {
  data: Data;
}

export default function Card(props: CardType) {
  return (
    <div className={`ring ring-yellow-500 border-none p-4 xl:p-12 lg:max-w-lg w-full ${props.data.isBig ? 'scale-110' : ''}`}>
      <p className='text-3xl capitalize font-bold'>{props.data.type}</p>
      <p>Blahblabla</p>
      <br />
      <p className='text-2xl'>฿ {props.data.price}</p>
      <ul>
        {
          props.data.features.map((a, j) => (
            <li key={j}>{a}</li>
          ))
        }
      </ul>
    </div>
  )
}
