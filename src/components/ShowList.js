import React from 'react';
import ShowCard from './ShowCard';

function ShowList({ shows, handleAddToWatchList, handleShowDelete }) {

    const showCard = shows.map(show =>{
        return <ShowCard key={show.id} show={show} onShowClicked={handleAddToWatchList} onShowDelete={handleShowDelete} />
    })

    return(
        <div className="show-container">
            {showCard}
        </div>
    );
}

export default ShowList;