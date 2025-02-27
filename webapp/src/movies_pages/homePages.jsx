import axios from "../api/axios";
import { useEffect, useState } from "react";
import Container from "../components/ui/container";
import Card from "../components/ui/Card";

export default function HomePage() {

    const [movie, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get("/movies").then((res) => {
            
            setMovies(res.data);
        });
    };

    useEffect(fetchMovies, []);

    return (

        <>

        <Container>
            <div className="grid grid-cols-9 relative left-18">
                {movie.map((movies)=>(
                <div key={movies.id} className="col-span-10 md:col-span-4 h-60 m-4">
                   <Card
                    image={movies.image}
                    title={movies.title}
                    content={movies.abstract}
                    genre={movies.genre}
                    />
                </div>
                ))}          
            </div>
        </Container>
   </>
    )
}