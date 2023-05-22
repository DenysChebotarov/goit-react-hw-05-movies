import { useEffect } from "react";
import { useState } from "react";
import { trendsMovie } from "components/Api/ApiMovie";
import TrendMovies from "components/TrendMovies/TrendMovies";

const Home = () => {
    const [data, setData] = useState([]);
console.log(data);
    useEffect(()=>{
        trendsMovie().then(data=>setData(data.results));
        
    }, [])
return <div>{data.length>0 && <TrendMovies data = {data}/>}</div>
}
export default Home;