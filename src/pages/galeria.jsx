import { Link } from "react-router-dom";
import "./galeria.css";
import { useEffect, useState } from "react";

function Galeria() {
    const [personagens, setPersonagens] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");

    useEffect(() => {
        async function fetchApiData() {
            const response = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            const data = await response.json();
            setPersonagens(data.results);
        }
        fetchApiData();
    }, []);

    const handleBusca = (event) => {
        setTermoBusca(event.target.value);
    };

    const personagensFiltrados = personagens.filter((personagem) =>
        personagem.name.toLowerCase().includes(termoBusca.toLowerCase())
    );

    return (



        <div>
            <h1>Lista de personagens</h1>
            <button className="segundo_link2">
                <Link to="/">Home</Link>
            </button>
            <div className="barra_pesquisa">
                <input
                    type="text"
                    placeholder="Digite o nome do personagem"
                    value={termoBusca}
                    onChange={handleBusca}
                />
            </div>
            <div className="galeria">
                {personagensFiltrados.map((personagem) => (
                    <div key={personagem.id} className="personagem">
                        <div className="imagem-nome">
                            <img src={personagem.image} alt={personagem.name} />
                            <div className="informacoes">
                                <h2>{personagem.name}</h2>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Status: {personagem.status}</p>
                                
                                <p>Espécie: {personagem.specie}</p>
                                <p>Tipo: {personagem.type}</p>
                                <p>Gênero: {personagem.gender}</p>
                                <p>Localização: {personagem.location.name}</p>


                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div >
    );
}

export default Galeria;
