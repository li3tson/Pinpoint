import * as React from 'react'

import { Wrapper } from './styles'

type PropType = {
  title: string
  children: React.ReactNode
}

const Window = ({ title, children }: PropType) => {
  return (
    <Wrapper title={title}>
      <div className='head'>
        <p className='head__title'>{title}</p>

        <ul className='head__list'>
          <li className='list__item' />
          <li className='list__item' />
          <li className='list__item list__item--contrast' />
        </ul>
      </div>

      <div className='context'>{children}</div>
    </Wrapper>
  )
}

export default Window
