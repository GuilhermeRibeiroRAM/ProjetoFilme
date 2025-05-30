import api from '../../Services/api';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './home.css';

// URL DA API: /movie/now_playing?api_key=065858db3c7e841780efab798be05357


export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "065858db3c7e841780efab798be05357",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0,10));

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false);
        }

        loadFilmes();
    }, []);

    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <div className='elementos-juntos'>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <div className='btn-acessar'>
                                    <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}