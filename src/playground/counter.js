class Counter extends React.Component{
   constructor(props){
       super(props);
       this.handleadd=this.handleadd.bind(this);
       this.handleminus=this.handleminus.bind(this);
       this.resetall=this.resetall.bind(this);
       this.state={

        count:0
       }
   }

  handleadd () {
      this.setState((state) => ({ count: state.count + 1}));
  }
handleminus(){
    this.setState((state)=>({count:state.count-1}));
}
resetall(){
    this.setState((state)=>({count:0}))
}
   render() {
       return (
    <div>
         <h1>countere :{this.state.count}</h1>
    <button onClick={this.handleadd}>add +1</button>
    <button  onClick={this.handleminus}> add -1</button>
     <button onClick={this.resetall}> ResetAll</button>

         
        </div>

    )
       }


}

ReactDOM.render(<Counter />,document.getElementById("one"));