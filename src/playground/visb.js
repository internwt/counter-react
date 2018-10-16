let visbilty=false;
const pressme=()=>{
  visbilty=!visbilty;
         render();           

 

}

const render=()=>{
 const   reverse=(
        <div>
            <ul>
            <li>visbilty</li></ul>
            <button onClick={pressme}>{visbilty ? "hide detail": "show detail"}</button>
                { visbilty &&(
                   <div>
                       dsgsdg gjkniaerigngakigoaiopaopop
                       </div>

                )}   
          
        </div>
 )
ReactDOM.render(reverse,document.getElementById("one"));
}
render();