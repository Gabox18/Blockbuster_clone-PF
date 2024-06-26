import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { allgenre } from "./dataMock.js";
import ordering from "../Funciones_js/Ordenamiento.js";


const initialState = {
  allMovies: [],
  copyAllMovies: [],
  genres: [],
  details: {},
  infoInput: {},
  user: {},
  commetDeleteMessage: "",
  commentMovie: {},
  commentFromMovies: [],
  allUsers: [],
  payPaypalSil: {},
  payPaypalGold: {},
  favoriteMovie: [],
  categorySwich: {},
  lastFavorite:{}
};

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },

    allMovies: (state, action) => {
      state.allMovies = action.payload;
      state.copyAllMovies = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    allgenres: (state, action) => {
      state.genres = action.payload;
    },

    filterGenre: (state, action) => {
      let auxMovies = state.copyAllMovies;
      state.allMovies =
        action.payload === "all"
          ? state.copyAllMovies
          : auxMovies.filter((e) => e.genre?.includes(action.payload));
    },

    orderMovies: (state, action) => {
      let auxMovies = state.allMovies;
      state.allMovies = ordering(auxMovies, action.payload);
    },

    DetailsMovies: (state, action) => {
      state.details = action.payload;
    },

    clearDetail: (state) => {
      state.details = [];
    },

    searchBar: (state, action) => {
      state.allMovies = state.copyAllMovies.filter(
        (e) =>
          e.name.toLowerCase().includes(action.payload) && e.status === true
      );
    },

    infoAdmin: (state, action) => {
      state.infoInput = action.payload;
    },

    commentInput: (state, action) => {
      state.commentMovie = action.payload;
    },

    commentByid: (state, action) => {
      state.commentFromMovies = action.payload;
    },

    editComment: (state, action) => {
      state.commentFromMovies = action.payload;
    },
    allUserAdmin: (state, action) => {
      state.allUsers = action.payload;
    },
    banUserAdmin: (state, action) => {
      state.allUsers = action.payload;
    },
    unBanUserAdmin: (state, action) => {
      state.allUsers = action.payload;
    },
    newAdmin: (state, action) => {
      state.allUsers = action.payload;
    },

    updateUser: (state, action) => {
      state.user = action.payload;
    },

    bannMovie: (state, action) => {
      state.allMovies = action.payload;
    },
    payPaymentSil: (state, action) => {
      state.payPaypalSil = action.payload;
    },
    payPaymentGold: (state, action) => {
      state.payPaypalGold = action.payload;
    },
    favoriteArray: (state, action) => {
      state.lastFavorite = action.payload;
    },
    infoAdmin: (state, action) => {
      state.allMovies = action.payload;
    },
    categoryswichRE: (state, action) => {
      state.categorySwich = action.payload;
    },
    sendSpam: (state, action) => {
      state.allUsers = action.payload;
    },
    favoriteAllMovies: (state, action) => {
      state.favoriteMovie = action.payload;
    },
  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

export const asyncallMovies = () => {
  return async function (dispatch) {
    try {
      let response = await axios(  ``
      );
      return dispatch(allMovies(response.data));
    } catch (error) {
      console.log(error, "from allMovies");
    }
  };
};

export const asyncgetDetails = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`/detail/${id}`);
      return dispatch(DetailsMovies(response.data[0]));
    } catch (error) {
      console.log(error, "from Details");
    }
  };
};

export const asyncAllgenres = (id) => {
  return async function (dispatch) {
    return dispatch(allgenres(allgenre));
  };
};

export const asyncGetName = (name) => {
  return async function (dispatch) {
    return dispatch(searchBar(name));
  };
};

//--------------------------------------------------------------------------------------------------------
//----------------------------------- function user ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
export const asynSetUser = (input) => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `/newU`,
        input
      );
      return dispatch(setUser(response.data));
    } catch (error) {
      console.log(error, "from create user");
    }
  };
};

export const asyncFormComment = (input, idMovie) => {
  return async function (dispatch) {
    try {
      await axios.post(
        `/detail/${idMovie}`,
        input
      );
    } catch (error) {
      console.log(error, "from Details");
    }
  };
};
export const asyncCommentById = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `/allComments`
      );
      let filtrados = response.data.filter((e) => e.movieId === id);
      return dispatch(commentByid(filtrados));
    } catch (error) {
      console.log(error);
    }
  };
};
export const asyncEditComment = (input) => {
  return async function (dispatch) {
    try {
      let response = await axios.put(
        `/editComment`,
        input
      );
      dispatch(editComment(response.data));
    } catch (error) {}
  };
};
export const asyncDeleteComment = (id) => {
  return async function (dispatch) {
    try {
      let obj = { id };

      await axios.post(
        `/detail/`,
        obj
      );
    } catch (error) {
      console.log(error, "from delete");
    }
  };
};

export const asyncGetUser = (userMail) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `/Uemail/${userMail}`
      );
      return dispatch(getUser(response.data));
    } catch (error) {}
  };
};

export const asynUpdateUser = (objUpdate) => {
  return async function (dispatch) {
    try {
      let response = await axios.put(
        `/editU`,
        objUpdate
      );
      return dispatch(updateUser(response.data));
      //return dispatch(updateUser(objUpdate))
    } catch (error) {}
  };
};

export const asynPaymentSilver = () => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `/create-paymentSilver/`
      );
      return dispatch(payPaymentSil(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asynPaymentGold = () => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `/create-paymentGold/`
      );
      return dispatch(payPaymentGold(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncFavoriteMovie = (input) => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `/addfav`,
        input
      );
      return dispatch(favoriteArray(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncCategorySwich = (idUser) => {
  return async function (dispatch) {
    try {
      let response = await axios.put(
        `/apiSilver`,
        idUser
      );
      return dispatch(categoryswichRE(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncCategorySwichGold = (idUser) => {
  return async function (dispatch) {
    try {
      let response = await axios.put(
        `/apiGold`,
        idUser
      );
      return dispatch(categoryswichRE(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncFavList = () => {
  return async function (dispatch) {
    try {
      let response = await axios(
        `/allFavs`
      );
      return dispatch(favoriteAllMovies(response.data));
    } catch (error) {}
  };
};
//--------------------------------------------------------------------------------------------------------------------
//------------------------------------function admin----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
export const asyncInfoAdmin = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/addM`,
        payload
      );
      return dispatch(infoAdmin(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncallUsers = () => {
  return async function (dispatch) {
    try {
      let response = await axios(
        `/users`
      );
      return dispatch(allUserAdmin(response.data));
    } catch (error) {
    }
  };
};

export const asynbanUsers = (id) => {
  return async function (dispatch) {
    await axios.put(
      `/bannUser`,
      id
    );
    let response = await axios.get(
      `/users`
    );

    return dispatch(banUserAdmin(response));
  };
};

export const asynDesBanUsers = (id) => {
  return async function (dispatch) {
    await axios.put(
      `/unBannUser`,
      id
    );
    let response = await axios.get(
      `/users`
    );

    return dispatch(unBanUserAdmin(response));
  };
};

export const asynNewAdmin = (id) => {
  return async function (dispatch) {
    await axios.put(
      `/createAdm`,
      id
    );
    let response = await axios.get(
      `/users`
    );

    return dispatch(newAdmin(response));
  };
};

export const asyncDeleteMovie = (id) => {
  return async function () {
    const objetito = { id };
    let response = axios.put(
      `/removeM/`,
      objetito
    );
  };
};

export const asyncUpdateMovie = (id) => {
  return async function (dispatch) {
    let response = axios.put(
      `/removeM`,
      id
    );
    dispatch(bannMovie(response.data));
  };
};

export const asyncSendSpam = () => {
  return async function (dispatch) {
    let response = axios(
      "/nodemailer"
    );
    return dispatch(sendSpam(response));
  };
};

export const asyncSpamBan = (email) => {
  return async function (dispatch) {
    
    let objetito = {email}
    let response = axios(`/nodemailerb`,objetito
    );
    return dispatch(sendSpam(response));
  };
};

export const asyncSpamUnban = (email) => {
  return async function (dispatch) {
    
    let objetito = {email}
    let response = axios(
      `/nodemailerun`,objetito
    );
    return dispatch(sendSpam(response));
  };
};
//----------------------------------------------------------------------------------------------------------------

export const {
  allMovies,
  DetailsMovies,
  clearDetail,
  allgenres,
  filterGenre,
  orderMovies,
  searchBar,
  formInput,
  infoAdmin,
  commentInput,
  commentByid,
  editComment,
  setUser,
  allUserAdmin,
  banUserAdmin,
  unBanUserAdmin,
  newAdmin,
  getUser,
  deleteComment,
  updateUser,
  payPaymentSil,
  payPaymentGold,
  bannMovie,
  favoriteArray,
  categoryswichRE,
  sendSpam,
  favoriteAllMovies,
} = dataSlice.actions;

export default dataSlice.reducer;
