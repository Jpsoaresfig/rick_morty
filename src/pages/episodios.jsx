import React, { useState, useEffect } from "react";
import "./episodios.css";
import { Link } from "react-router-dom";

function Episodios() {
  const [episodios, setEpisodios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchEpisodios() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setEpisodios(data.results);
      } catch (e) {
        setError("Ocorreu um erro ao buscar os episódios.");
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodios();
  }, []);

  const filteredEpisodios = episodios.filter((episodio) =>
    episodio.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Episódios</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar episódio..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      
      <button className="segundo_link2">
        <Link to="/">Home</Link>
      </button>
      
      <div className="episode-cards">
        {filteredEpisodios.length > 0 ? (
          filteredEpisodios.map((episodio) => (
            <div key={episodio.id} className="episode-card">
              <img src={episodio.image} alt={episodio.name} />
              <div className="episode-details">
                <h3>{episodio.name}</h3>
                <p>{episodio.episode}</p>
                <p>{episodio.air_date}</p>
                <ul className="character-list">
                  {episodio.characters.map((characterUrl) => (
                    <li key={characterUrl}>
                      <img
                        src={`https://rickandmortyapi.com/api/character/avatar/${characterUrl.split('/').pop()}.jpeg`}
                        alt={characterUrl}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum episódio foi encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Episodios;
