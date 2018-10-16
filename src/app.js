console.log("every thing id fine");

const app={
      name:'lovey',
      options:[]
};
console.log("gsr");


const onformsubmit=(e)=>{
    e.preventDefault();
    
    const option=e.target.elements.option.value;
   
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        renderapp();
    }
   
  
}
const Removeall=()=>{
    app.options=[];
    renderapp();

}

const objecty = document.getElementById("one");


const renderapp=()=>{

const element=(
 <div>
    <p>{app.options.length}</p>
     <ol>
    {
    app.options.map((number)=> <li key={number}>{number}</li>
    )

    }
    </ol>

<button onClick={Removeall}>remove all</button>
<button disabled >whashinsfdk</button>

  <form onSubmit={onformsubmit}>
     <input type="text" name="option" />
   <button>submit</button>

  </form>

     </div>

);
ReactDOM.render(element,objecty);
}

renderapp();


