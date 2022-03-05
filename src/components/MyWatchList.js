import React from 'react';
import ShowCard from './ShowCard'

function MyWatchList({ watchList, handleRemoveFromWatchList, handleShowDelete }) {

    const showCard = watchList.map(show =>{
        return <ShowCard key={show.id} show={show} onShowClicked={handleRemoveFromWatchList} onShowDelete={handleShowDelete} />
    })

    return(
        <div className="watch-list-container">
            {showCard}
        </div>
    )
}

export default MyWatchList;