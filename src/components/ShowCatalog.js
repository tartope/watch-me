import React, {useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

const showsAPI = 'http://localhost:8081/shows'

function ShowCatalog() {

    const [shows, setShows] = useState([])
    const [watchList, setWatchList] = useState([])

    useEffect(()=>{
        fetch(showsAPI)
        .then(response => response.json())
        .then(showsData => {
            // console.log(showsData)
            setShows(showsData)
        })
    }, [])

    function handleAddToWatchList(show){
        if(!watchList.includes(show))
        setWatchList([...watchList, show])
    }

    function handleRemoveFromWatchList(show){
        const updatedWatchedList = watchList.filter(item => item.id !== show.id)
        setWatchList(updatedWatchedList)
    }

    function handleShowDelete(deletedShow){
        fetch(`${showsAPI}/${deletedShow.id}`, {
            method: 'DELETE',
        })
        const deletedShows = shows.filter(item => item.id !== deletedShow.id)
        setShows(deletedShows)
        const deletedWatchListShows = watchList.filter(item => item.id !== deletedShow.id)
        setWatchList(deletedWatchListShows)
    }   

    return(
        <>
            <MyWatchList watchList={watchList} handleRemoveFromWatchList={handleRemoveFromWatchList} handleShowDelete={handleShowDelete} />
            <hr/>
            <ShowList shows={shows} handleAddToWatchList={handleAddToWatchList} handleShowDelete={handleShowDelete} />
        </>
    );
}

export default ShowCatalog;