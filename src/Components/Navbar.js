import styles from '../styles/Navbar.module.css'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { RiMovieLine } from "react-icons/ri";
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'



function Navbar(){

    const[search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!search) return;

      navigate(`/search?q=${search}`);
      setSearch("")
    };


    return (
        
        <nav className={styles.navbar}>

          <h2>
            <Link to='/'>
                <RiMovieLine/> Home
            </Link>
          </h2>

          <h2>VERZEL FILMES</h2>

        
          <form onSubmit={handleSubmit}>

            <input type='text' placeholder='Pesquise o filme que deseja'
              onChange={(e) => setSearch(e.target.value)} value={search}/>

            <button type='submit'>
                <BiSearchAlt2 />
            </button>

            <Link to='favorite'>
              <button type='submit'>
                Favoritos
              </button>
            </Link>

          </form>

        </nav>

    )
}

export default Navbar