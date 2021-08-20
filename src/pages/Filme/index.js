
import './filme.css';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme(){

    const { id } = useParams();
    const history = useHistory();

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length ===0 ){
                history.replace('/');
                return;
            }

            setFilmes(response.data);
        }

        loadFilme();
    },[id, history])

    function salvaFilme(){

        const myList = localStorage.getItem('filmes');

        let filmeSalvo = JSON.parse(myList) || [];

        const temFilme = filmeSalvo.some((film) => film.id === filmes.id);

        if(temFilme){
            toast.warning('Você já adicionou este filme a sua lista');
            return;
        }

        filmeSalvo.push(filmes);
        localStorage.setItem('filmes', JSON.stringify(filmeSalvo));
        toast.success('Filme Salvo com Sucesso!');
    }

    return(
        <div className='info'>
            <h1> {filmes.nome} </h1>
            <img src={filmes.foto} atl={filmes.nome} />
            
            <h3>Sinopse</h3>
             {filmes.sinopse}

             <div className='btn'>
                <button onClick={ salvaFilme } >Salvar</button>
                <button>
                    <a target='blank' href={`https://youtube.com/results?search_query=${filmes.nome} Trailer`}>Trailer</a>    
                </button>
            </div> 
        </div>
    )
}