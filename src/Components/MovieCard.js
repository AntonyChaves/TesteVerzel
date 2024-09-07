
import { Form, Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';


  const urlFilme = "https://image.tmdb.org/t/p/w500/";

  const urlFavorito = "http://localhost:8080/control/verificaFavorito/"

  const urlAdicionaFavorito = "http://localhost:8080/control/adicionarFavorito/"

  const urlRemoveFavorito = "http://localhost:8080/control/removerFavorito/"


function MovieCard({movie, showLink = true}){

    const[favorito, setFavorito] = useState()

    const verificaFavorito = (id) => {

        fetch(urlFavorito+id, {
            method:'GET',
            headers:{
                 'Content-Type': 'aplication/json'
            },
        })  .then(resp => resp.json())
            .then ((data) => {
                setFavorito(data)
                
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {

        const idFilme = movie.id;
        verificaFavorito(idFilme);

    }, [Form.onSubmit])




    

    const modificarFavorito = (e) => {

        e.preventDefault()

        verificaFavorito(movie.id)
        
        if(favorito > 0){

            fetch(urlRemoveFavorito+movie.id, {
                method:'DELETE',
            })  .catch((err) => console.log(err))
                
            verificaFavorito(movie.id)

        }

        else{

            fetch(urlAdicionaFavorito+movie.id, {
                method:'POST',
                headers:{
                     'Content-Type': 'aplication/json'
                },
                
            })  
                .catch((err) => console.log(err))
                

                verificaFavorito(movie.id)

        }
        
        
        
    }

    

    return (
        <div>
            <img src={urlFilme+movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>
                <FaStar/> {movie.vote_average}
            </p>

            <form onSubmit={modificarFavorito}>
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

                        
                    <abbr title='Clique duas vezes para marcar ou desmarcar' >

                        <button type='submit'>
                                
                        {favorito > 0 && <><MdFavorite style={ {
                                                                        color: "#ff0a00",
                                                                        background: "#111",
                                                                        border: "0"
                                                                    }}/></>}


                        {favorito == 0 && <><MdFavoriteBorder style={ {
                                                                                color: "#ff0a00",
                                                                                background: "#111",
                                                                                border: "0"
                                                                                }}/></>}
                                
                        </button>
                    </abbr>
            </form>
        </div>
    )

}

export default MovieCard