import styles from'../styles/MovieGrid.css'
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'
import Navbar from '../Components/Navbar'

const searchURL = "http://localhost:8080/control/pesquisa/"

function Search (){

    const [searchParams] = useSearchParams()

    const[movies, setMovies] = useState([])

    const texto = searchParams.get("q")

    const getMovieBySearch = (url) =>{

        fetch(url, {
            method:'GET',
            headers:{
                 'Content-Type': 'aplication/json'
            },
        })  .then(resp => resp.json())
            .then ((data) => {
                setMovies(data)
                
            })
            .catch((err) => console.log(err))


    }

    useEffect(() => {

        const request = searchURL+texto;
        getMovieBySearch(request);

    },[texto]);

    return(
        <div className='container'>

            
            <h2 className='title'>Resultados para: <span className='query_text'>{texto}</span></h2>
            
            <div className='movies_container'>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => (<MovieCard className={'movies_container'} movie={movie} key={movie.id}/>))}
            </div>

        </div>
    )
}

export default Search