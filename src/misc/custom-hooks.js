import {useReducer , useEffect } from 'react';

function showsReducer(prevState, action){
        switch(action.type){

                case 'Add':{
                        return [...prevState, action.showId]
                }

                case 'REMOVE':{
                        return prevState.filter((showId)=> showId!==action.showId);
                }

              default : return prevState;
        }
}

function usePresistedReducer(reducer, initialState, key){
const [state, dispatch ]= useReducer(reducer, initialState, initial=>{
        const persisted= localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial;
});

useEffect(() => {
        localStorage.setItme(key, JSON.stringify(state));
}, [state , key]);

return  [state, dispatch];
}

export function useShows(key = "shows"){
        return usePresistedReducer(showsReducer , [] ,key)
}