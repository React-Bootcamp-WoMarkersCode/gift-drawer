import React from 'react'
import { Button } from'./Button.styled'

export const StyledButton = props => {
  return(
    <Button type={props.type} onClick={props.onClick} htmlFor={props.for}>
      {props.label}
    </Button>
  )
}