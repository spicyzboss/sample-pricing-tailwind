import { ReactNode } from 'react';

type LayoutType = {
  children: ReactNode;
}

export default function Layout(props: LayoutType) {
  return (
    <div className='max-w-7xl flex flex-col mx-auto'>
      { props.children }
    </div>
  )
}