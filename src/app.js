console.log("every thing id fine");

let count=0;
const addone=()=>{
     count++;
        recounterapp();
};
const minusone=()=>{
      count--;
    recounterapp();
};

const reset=()=>{
  count=0;
    
  recounterapp();
};
const objecty = document.getElementById("one");

const recounterapp=()=>{
    const templatetwo=(
 <div>
<h1>count: {count}</h1>
 <button onClick={addone}>+1</button>
 <button onClick={minusone}>-1</button>
 <button onClick={reset}>Reset</button>
 </div>

);

ReactDOM.render(templatetwo, objecty);
}

     



recounterapp();