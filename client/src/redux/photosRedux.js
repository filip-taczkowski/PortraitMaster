import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getRequest = ({ photos }, name) => photos.requests[name];
export const getTrendingPhotos = ({ photos }) => [...photos.data].sort((a, b) => (a.votes > b.votes) ? -1 : 1).slice(0, 4);
export const getPhotos = ({ photos }) => photos.data;
export const getPhoto = ({ photos }, id) => photos.data.find(photo => photo._id === id);

/* ACTIONS */

// action name creator
const reducerName = 'concerts';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_PHOTO = createActionName('ADD_PHOTO');
export const LOAD_PHOTOS = createActionName('LOAD_PHOTOS');
export const VOTE_PHOTO = createActionName('VOTE_PHOTO');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addPhoto = payload => ({ payload, type: ADD_PHOTO });
export const loadPhotos = payload => ({ payload, type: LOAD_PHOTOS });
export const votePhoto = payload => ({ payload, type: VOTE_PHOTO });

/* THUNKS */

export const addPhotoRequest = (data) => {
  return async dispatch => {

    dispatch(startRequest({ name: ADD_PHOTO }));
    try {

      let res = await axios.post(
        `${API_URL}/photos`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        },
      );

      dispatch(addPhoto(res.data));
      dispatch(endRequest({ name: ADD_PHOTO }));

    } catch(e) {
      dispatch(errorRequest({ name: ADD_PHOTO, error: e.message }));
    }

  };
};

export const loadPhotosRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: LOAD_PHOTOS }));
    try {

      let res = await axios.get(`${API_URL}/photos`);

      dispatch(loadPhotos(res.data));
      dispatch(endRequest({ name: LOAD_PHOTOS }));

    } catch(e) {
      dispatch(errorRequest({ name: LOAD_PHOTOS, error: e.message }));
    }

  };
};

export const votePhotoRequest = (id) => {
  return async dispatch => {

    try {
      const votes = JSON.parse(localStorage.getItem('votes')) || [];
      if(votes && votes.indexOf(id) !== -1) return false;
      await axios.put(`${API_URL}/photos/vote/${id}`);
      votes.push(id);
      localStorage.setItem('votes', JSON.stringify(votes));
      dispatch(votePhoto(id));
    } catch(e) {
      console.error(e);
    }

  };
};


/* INITIAL STATE */

const initialState = {
  data: [],
  requests: [],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case LOAD_PHOTOS:
      return { ...statePart, data: [...action.payload] };
    case VOTE_PHOTO:
      return { ...statePart, data: statePart.data.map(photo => (photo._id === action.payload) ? { ...photo, votes: photo.votes+1 } : photo) };
    case START_REQUEST:
      return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.message, success: false }} };
    default:
      return statePart;
  }
}
