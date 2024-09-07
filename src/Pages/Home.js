import MovieCard from '../Components/MovieCard';
import Navbar from '../Components/Navbar';
import {useState, useEffect} from 'react'


function Home (){

        const[topMovies, setTopMovies] = useState([]);
        
        const getTopRatedMovies = (url) =>{

                fetch(url, {
                    method:'GET',
                    headers:{
                         'Content-Type': 'aplication/json'
                    },
                })  .then(resp => resp.json())
                    .then ((data) => {
                        setTopMovies(data)
                        
                    })
                    .catch((err) => console.log(err))
        
        
        }

        useEffect(() => {
        
            const TopRated = "http://localhost:8080/control/filmesPopulares";
            getTopRatedMovies(TopRated);

        },[]);
        
    return (
        <div className='container'>

            
            <h2 className='title'>Melhores Filmes:</h2>
            
            <div className='movies_container'>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
            </div>

        </div>
    )
}

export default Home 

