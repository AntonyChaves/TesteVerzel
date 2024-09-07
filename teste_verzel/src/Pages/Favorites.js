import styles from '../styles/MovieGrid.css'
import {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'

    const arrayFavoritosURL = "http://localhost:8080/control/todosFavoritos"

    const favoritosURL = "http://localhost:8080/control/buscaFilme/"

function Favorites(){

    const [favorites, setFavorites] = useState([]);

    const getFavoritos = (url) => {
        
        fetch(url, {
            method:'GET',
            headers:{
                 'Content-Type': 'aplication/json'
            },
        })  .then(resp => resp.json())
            .then ((data) => {
                setFavorites(data)
                
            })
            .catch((err) => console.log(err))
            console.log(favorites)

    }

    useEffect(() => {

        const favoritesObjects = arrayFavoritosURL;
        getFavoritos(favoritesObjects);
        
        

    }, [])

    return (

        <div className='container'>

            
            <h2 className='title'>Veja aqui seus filmes Favoritos</h2>
            
            <div className='movies_container'>
                {favorites.length === 0 && <p>Carregando...</p>}
                {favorites.length > 0 && favorites.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
            </div>

        </div>

    )
}

export default Favorites