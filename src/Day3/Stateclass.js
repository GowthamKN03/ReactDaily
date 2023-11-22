import React, { Component } from 'react'



export default class Stat extends Component {

  constructor()
  {
    super();  //to inhert the parent properties..
    this.state ={count:0,clg:"SKCET",name:"aaaa"}

  }

   change=()=>{

    if(this.state.clg=="SKCET")
    {
      this.setState({clg:"SRM"})
      this.setState({name:"gggg"})
      this.setState({count:this.state.count+1})
    }
    else
    {
      this.setState({clg:"SKCET"})
      this.setState({name:"aaaaa"})
      this.setState({count:this.state.count+1})
    }
    // console.log((this.state.count));;

  }

    render() {
    return (
      <div>
        <h1>
            hello I am {this.state.name} and I am studying in {this.state.clg}
        </h1>
        <h1>Count :{this.state.count}</h1>
        <button onClick={this.change}>Click me!!</button>
      </div>
    )
  }
}