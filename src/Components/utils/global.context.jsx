import axios from "axios";
import { useMemo, useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";



export const themes = {
  light: {
    color: "black",
    background: "white",
  },

  dark: {
    color: "white",
    background: "black",
  },
};

const favsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
  }
};

const initialFavsState = [];

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [odontologos, setOdontologos] = useState([]);
  const [theme, setTheme] = useState(themes.light);
  const [statefavs, dispatchFavs] = useReducer(favsReducer, initialFavsState,initFav);

  function initFav(initialFavState) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialFavState;
  }

  const changeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologos(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem("Favs", JSON.stringify(statefavs));
  }, [statefavs]);

  const providerValue = useMemo(
    () => ({
      odontologos,
      setOdontologos,
      changeTheme,
      theme,
      statefavs,
      dispatchFavs,
    }),
    [odontologos, setOdontologos, changeTheme, theme, statefavs, dispatchFavs]
  );

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
