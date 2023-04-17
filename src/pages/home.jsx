import { Link } from "react-router-dom";
import './home_style.css'
export function Home() {
  return (
    <div>

      <div className="inicio">
        <header className="cabecalho">
          <h1 className="titulo">Rick Morty</h1>
        </header>
        <img className="image_rick" src="https://uploads.jovemnerd.com.br/wp-content/uploads/2022/08/rick_and_morty_capa__ysc3rw-1210x544.jpg" alt="" />
      </div>








      <button className="primeiro_link"> <Link to="/galeria"> Ver Galeria</Link></button>
      <br />
      <button className="segundo_link"><Link to="/episodios">episodios</Link></button>
      <br />
      <button className="terceiro_link"><Link to="/">home</Link></button>
      
     
      <p>Rick and Morty é uma série animada americana de comédia e ficção 
        científica. A história segue as aventuras de um cientista alcoólatra e
         cínico chamado Rick Sanchez e seu neto nervoso e facilmente influenciável,
          Morty Smith, enquanto eles viajam por diferentes dimensões e universos.
           A série é conhecida por seu humor ácido e temas existenciais profundos, 
           mas também aborda questões mais sérias como depressão, ansiedade e
            mortalidade. Com personagens complexos e referências à cultura pop, 
            Rick and Morty tem uma grande base de fãs e é considerada uma das séries
             mais populares da atualidade</p>

            <img className="image_rick3" src="https://osurtododia.com.br/wp-content/uploads/2020/08/sete-motivos-para-assistir-rick-and-morty.jpg"  />
             <img className="image_rick2" src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/09/rick-and-morty-season-4-coming-november-2019_yren.jpeg" alt="" />
    </div>  
  );
}

export default Home;
