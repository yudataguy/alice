import React from 'react';

const renderExchanges = (props) => {
  return (coords, index) => {
    const exchangeProps = {

      cx: props.nodes[props.producers+index].x,
      cy: props.nodes[props.producers+index].y,
      r: props.nodes[props.producers+index].r,
      key: props.producers + index,
      fill: "red"
    }
    return (
    <circle {...exchangeProps} onMouseOver={(node)=>props.popup(props.nodes[props.producers+index])} onMouseOut={(node)=>props.popup(props.nodes[props.producers+index])} onClick={(e)=>props.updateNodeCards(props.nodes[props.producers+index])}/>) // <rect> is d3 function
  }
}

export default (props) => {
  return <g>{ props.nodes.filter(el => el.group === 2).map(renderExchanges(props))}</g>
}