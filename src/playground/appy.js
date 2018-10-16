const obj ={
          name:"name",
          getfullname() {
              return  this.name;
          }
}
const some=obj.getfullname.bind();
console.og()


class Indecision extends React.Component{
render() {
    const title="wdmewsccccccccccccds  dsdccccd";
    const subtitle="wonder women reffrf"
    return (
 <div>
  <h1>this is an header</h1>
  <p>this is part of an header</p>
   <Header title={title} subtitle={subtitle}/>
   < Header />
   < Header />
   <Action  />
   <Addsectionn />
   <Formsection />
      </div>
    )
}
    
}

class Header extends React.Component {
render() {
   
    return (
        <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
        <p>the person is an alphabhet</p>
        </div>
        )


}
   

}

class Action extends  React.Component{
     clickme(){
        alert("something here for what s?")
      }
  render(){
   
     return (
       <div>
                <button onClick={this.clickme}>click me</button>
          <Optioned />
          
       </div>
     )

  }

}

class Optioned extends React.Component {
    handle(){
        alert("remove some data");
    }
  render() {
      return (
          <div>
          <form>
              <input type="text" />
              </form>

                <button onClick={this.handle}>remove all</button>
              </div>
      )
  }

}

class Addsectionn extends React.Component {
   render() {
     return (
         <div>
             <section>
           <option>click</option>
           < option> click </option>

             </section>

             </div> 


     )

}
}

class Formsection extends React.Component {
    event(e){
e.preventDefault();
        const data=e.target.elements.valuee.value;
        if(data){
        alert(data);
        }
    }

  render() {
   return (
        <div>
             <form onSubmit={this.event}>
                 <input type="text" name="valuee" />
                 <input type="submit" />
                 </form>

        </div>
  

   )

  }

}



ReactDOM.render(<Indecision />,document.getElementById("one"));