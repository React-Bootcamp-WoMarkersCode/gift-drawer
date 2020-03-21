import React from 'react'
import { Button } from'./button.styled'

export const StyledButton = props => {
  return(
    <Button type={props.type} onClick={props.onClick}>
      {props.label}
    </Button>
  )
}