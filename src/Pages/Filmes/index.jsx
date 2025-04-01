import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../Services/api';
import './filme-info.css';

export default function Filme() {
 
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: "065858db3c7e841780efab798be05357",
                    language: "pt-BR",
                }
            })
            .then((response) =>{
                setFilme(response.data)
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado!");
                navigate("/", {replace:true});
                return;
            })
        }
        loadFilme();

        return() => {
            console.log("COMPONENTE FOI DESMONTADO");
        }
    }, [])

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando Detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
        
            <h3>Sinopse:</h3>
            <span>{filme.overview}</span> <br/>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button className="btnSalvar">Salvar</button>
                <button className="btnTrailer">  
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    );
}