
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './favs.css';

export default function Favoritos(){

    const [filme, setFilme] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes');
        setFilme(JSON.parse(minhaLista) || [] );

    },[])

    function handleDelete(id){
        let deleter = filme.filter((item)=>{
            return(item.id !== id)
        })
        
        setFilme(deleter)
        localStorage.setItem('filmes', JSON.stringify(deleter));
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Favoritos</h1>

            {filme.length === 0 && <span>Você não possui filmes salvos!</span>}

            <ul>
                {filme.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span> {item.nome} </span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=> handleDelete(item.id)}> Excluir </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
}