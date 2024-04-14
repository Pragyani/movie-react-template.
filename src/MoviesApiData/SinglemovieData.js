import React from "react";
import { useParams } from "react-router-dom";
import { API_URl } from "../Contexts/context";

const MovieData = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    
    const TogetMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data.Search)
            } else {
                setIserror({ show: true, message: data.Error })
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

       let timeOut = setTimeout(()=>{
            TogetMovie(`${API_URl}&i=${id}`);
        },500)
        return ()=>clearTimeout(timeOut)   
        }, [id])
    return(
        <>

            </>
    )
    
   
  };
  
  export default MovieData;