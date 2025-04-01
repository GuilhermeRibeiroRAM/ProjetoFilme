import { Link } from 'react-router-dom';
import './notfound.css';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1> <br/>
            <h2>Página não encontrada</h2> <br/>

            <Link to="/">Volte para o Home e procure por mais filmes!</Link>
        </div>
    );
}