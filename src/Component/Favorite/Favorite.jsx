import { useEffect, useState } from "react";
import SelectedHome from "../SelectedHome/SelectedHome";
import { Helmet } from "react-helmet-async";

const Favorite = () => {
    const [list, setList ] = useState([]);
    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem('home'));
        setList(favList)
    },[])
    // console.log(list, 'list form local')
    return (
        <div className="md:grid grid-cols-3 gap-5 my-10 " >
            <Helmet> <title> Favorite | Find Your Dream Home </title> </Helmet>
            {
                list?.map(( item, idx)=> <SelectedHome key={idx} data={item} > </SelectedHome> )
            }
        </div>
    );
};

export default Favorite;