import { ReactNode } from 'react';

type CardLayoutType = {
  children: ReactNode;
}

export default function CardLayout(props: CardLayoutType) {
  return (
    <div className='flex gap-4 my-10 mx-12 flex-col lg:flex-row'>
      { props.children }
    </div>
  )
}