import React from "react";
import Square from '../Square'
import Circle from '../Circle'
import Triangle from '../Triangle'
import Rectangle from '../Rectangle'

class Figure extends React.Component {

  render() {

    if (this.props.type === 'Square') {
      return (
        <Square color={this.props.color} />
      )
    }

    if (this.props.type === 'Circle') {
      return (
        <Circle color={this.props.color} />
      )
    }

    if (this.props.type === 'Triangle') {
      return (
        <Triangle color={this.props.color} />
      )
    }
    
    if (this.props.type === 'Rectangle') {
      return (
        <Rectangle color={this.props.color} />
      )
    }

    return (
      <div />
    )

  }
}

export default Figure;