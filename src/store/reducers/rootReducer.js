import authReducer from './authReducer';
import userReducer from './userReducer';
import skillsReducer from './skillsReducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    skills: skillsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;