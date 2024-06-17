import React from "react";
import buttonRight from "./assets/images/flecha-direita.png"
import buttonLeft from "./assets/images/flecha-esquerda.png"
import joker from "./assets/images/joker.jpg"
import hp from "./assets/images/hp.png"
import style from "./styles/styles.css"

class App extends React.Component{

  render(){
    return (
        <main>
            <div className="box">
                <div className="image">
                    <img src={joker} alt="" />
                </div>
                <div className="buttons">
                    <button>
                        <img className="left" src={buttonLeft} alt="" />
                    </button>
                    <button>
                        <img className="right" src={buttonRight} alt="" />
                    </button>
                </div>
                <div className="movie-name">
                    <h1>Joker</h1>
                </div>
                <div className="text-area">
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. 
                        Quisque laoreet ligula lectus, non <br/>
                        suscipit magna rutrum in. Maecenas quam lectus,<br/> 
                        condimentum in lacus facilisis, laoreet congue <br/>
                        neque.Nam ullamcorper, ex nec euismod tempor, <br/>                       
                        nisi tellus aliquam neque, a lobortis purus est <br/>finibus odio. 
                        Donec eu elit vel nulla accumsan <br/>
                        molestie eget rhoncus  nunc. Phasellus luctus, <br/>
                        urna sit amet ultrices interdum,  nibh justo aliquet <br/> 
                        lacus, in viverra elit lorem non mi. Aliquam erat<br/>
                        volutpat. Donec congue convallis eros eu 
                        finibus.
                    </p>
                </div>
            </div>
        </main>
    );
  }
}

export default App;
