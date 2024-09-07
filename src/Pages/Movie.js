import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {BsGraphUp,
        BsWallet2, 
        BsHourglassSplit, 
        BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {FaStar} from 'react-icons/fa'

import styles from '../styles/Movie.module.css'

const movieURL = "http://localhost:8080/control/buscaFilme/"

const urlFilme = "https://image.tmdb.org/t/p/w500/";

function Movie (){

    const {id} = useParams()

    const [movie, setMovie] = useState(null)

    const getMovie = (url) => {

        fetch(url, {
            method:'GET',
            headers:{
                 'Content-Type': 'aplication/json'
            },
        })  .then(resp => resp.json())
            .then ((data) => {
                setMovie(data)
                
            })
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        const request = movieURL+id;
        getMovie(request);
    }, []);

    const formatMoney = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    return(
        
        <div>
            {movie && 
                <>
                    <div className={styles.movie_page}>

                         
                        <img src={urlFilme+movie.poster_path} alt={movie.title}/>
                        

                        <div className={styles.dados}>
                            <h2 >{movie.title}</h2>
                            <p className={styles.tagline}> {movie.tagline} </p>
                            
                            <br></br>

                            <div className={styles.Description}>
                                <h3>
                                    <BsFillFileEarmarkTextFill/> Descrição: 
                                </h3>
                                <p>{movie.overview}</p>
                            </div>

                            <div className={styles.info}>
                                <div>
                                    <h3>
                                        <BsHourglassSplit/> Duração: 
                                    </h3>
                                    <p>{movie.runtime} minutos</p>
                                </div>
                            
                                <div>
                                    <h3>
                                        <BsGraphUp/> Receita: 
                                    </h3>
                                    <p>{formatMoney(movie.revenue)}</p>
                                </div>
                            
                                <div>
                                    <h3>
                                        <BsWallet2/> Orçamento: 
                                    </h3>
                                    <p>{formatMoney(movie.budget)}</p>
                                </div>

                                <div>
                                    <h3>Nota:</h3>
                                    <p><FaStar/> {movie.vote_average}</p>
                                    
                                </div>

                            </div>

                            

                           

                            
                            </div>
                        </div>
                </>
            }
        </div>
        
    )
}

export default Movie