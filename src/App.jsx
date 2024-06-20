import React, { useState } from "react";
import buttonRight from "./assets/images/flecha-direita.png";
import buttonLeft from "./assets/images/flecha-esquerda.png";
import joker from "./assets/images/joker.jpg";
import hp from "./assets/images/hp.png";
import style from "./styles/styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [movieName, setMovieName] = useState("Joker");
  const [movieImage, setMovieImage] = useState(joker);
  const [canGoLeft, setCanGoLeft] = useState(true); // Inicia permitindo ir para a esquerda
  const [canGoRight, setCanGoRight] = useState(false); // Inicia desabilitando ir para a direita

  const toggleTheme = (direction) => {
    if (direction === "left" && canGoLeft) {
      setDarkMode(false); // Vai para o tema Joker
      setMovieName("Joker");
      setMovieImage(joker);
      setCanGoLeft(false); // Desabilita a opção de ir para a esquerda
      setCanGoRight(true); // Habilita a opção de ir para a direita
    } else if (direction === "right" && canGoRight) {
      setDarkMode(true); // Vai para o tema Harry Potter (HP)
      setMovieName("Harry Potter");
      setMovieImage(hp);
      setCanGoLeft(true); // Habilita a opção de ir para a esquerda
      setCanGoRight(false); // Desabilita a opção de ir para a direita
    }
  };

  return (
    <main className={darkMode ? "hp" : "joker"}>
      <div className="box">
        <div className="image">
          <img src={movieImage} alt={movieName} />
        </div>
        <div className="buttons">
          <button onClick={() => toggleTheme("left")} disabled={!canGoLeft}>
            <img className="left" src={buttonLeft} alt="Left arrow" />
          </button>
          <button onClick={() => toggleTheme("right")} disabled={!canGoRight}>
            <img className="right" src={buttonRight} alt="Right arrow" />
          </button>
        </div>
        <div className="movie-name">
          <h1>{movieName}</h1>
        </div>
        <div className="text-area">
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Quisque laoreet ligula lectus, non <br />
            suscipit magna rutrum in. Maecenas quam lectus,
            <br />
            condimentum in lacus facilisis, laoreet congue <br />
            neque.Nam ullamcorper, ex nec euismod tempor,
            <br />
            nisi tellus aliquam neque, a lobortis purus est <br />finibus odio.
            Donec eu elit vel nulla accumsan <br />
            molestie eget rhoncus nunc. Phasellus luctus,
            <br />
            urna sit amet ultrices interdum, nibh justo aliquet <br />
            lacus, in viverra elit lorem non mi. Aliquam erat
            <br />
            volutpat. Donec congue convallis eros eu finibus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
