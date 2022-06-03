
import { createContext, useReducer } from "react";

import GithubReducer from "../../context/Github Context/githubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const clearUsers = () => dispatch({
    type: 'CLEAR_USERS'
  })

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text
    })


    const response = await fetch(`https://api.github.com/search/users?${params}`);
    const {items} = await response.json();
    console.log(items)
    

    dispatch({
        type: 'GET_USER',
        payload: items
    })
    
  };

  const setLoading = () =>{dispatch({
      type: 'SET_LOADING'
  })}

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers: searchUsers, clearUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
