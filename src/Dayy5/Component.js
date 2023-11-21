import React, { Component } from 'react'

export default class Com extends Component {
    state={color:"Red"}
    componentDidMount()
    {
        setTimeout(()=>{this.setState({color:"Blue"})},3000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("i").innerHTML="my previous value "+prevState.color;
    }
    componentDidUpdate()
    {
        document.getElementById("li").innerHTML="my previous value"+this.state.color;
    }
  render() {
    return (
      <div>
        <p id="i"></p>
        <p id="li"></p>
      </div>
    )
  }
}
