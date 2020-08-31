import React from 'react'
import css from './Layout.module.css'

export default function Layout(props) {
  return (
    <div data-cy='Layout' className={css.Layout}>
      {props.children}
    </div>
  )
}
