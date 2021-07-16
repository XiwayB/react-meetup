import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    // add functions in the context to help for autocompletion
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props){
    const [ userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        // setUserFavorites(userFavorites.concat(favoriteMeetup));
        // .concat, like push but returns a new array with that added meetup set as a new state
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup); 
        });
        // user prev to be sure to have the latest state
    }

    function removeFavoriteHandler(meetupID) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter( meetup => meetup.id !== meetupID); 
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // expose those functions to all other components that want to use it
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    // value takes the context defined FavoritesContext 
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;