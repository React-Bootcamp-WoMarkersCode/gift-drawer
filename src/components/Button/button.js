import React from 'react'
import { Button } from'./button.styled'

export const StyledButton = props => {
  return(
    <Button type={props.type}>
      {props.label}
    </Button>
  )
}