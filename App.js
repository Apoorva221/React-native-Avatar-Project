import React, { Component } from "react";
import {Text} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {persistStore, persistReducer } from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import AvatarListScreen from "./src/avatarListScreen";



// const initialState = {
//   list : [
//     {
//       name: 'Amy Farha',
//       avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
//       subtitle: 'Vice President'
//     },
//     {
//       name: 'Jackie Chan',
//       avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
//       subtitle: 'Vice Chairman'
//     }
//   ]

// }


// const initialState={
// list : [
//   {
//   "id": "56563",
//   "first_name": "Piyush",
//   "last_name": "Soni",
//   "company": "duit",
//   "met_at": "preet vihar, new delhi",
//   "tags": [
//     ["developer", 0.9],
//     ["hiker", 0.8],
//     ["intern", 0.85],
//     ["student", 0.6]]
//   },
//   {
//     "id": "56563",
//     "first_name": "Piyush",
//     "last_name": "Soni",
//     "company": "duit",
//     "met_at": "preet vihar, new delhi",
//     "tags": [
//       ["developer", 0.9],
//       ["hiker", 0.8],
//       ["intern", 0.85],
//       ["student", 0.6]
//     ]
//   },
// ]
// }

// const initialState = fetch('https://pastebin.com/raw/DtZueLH4')
// .then((res)=>res.json())
// .then((resJson) => {
//   return resJson;
// })
// .catch((error) => {
//   alert(error);
// })




//redux
const reducer = (state = initialState) => {
  return state;
}
const persistConfig = {
  key: 'root',
  storage,
}

 const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)





export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AvatarListScreen/>
        </PersistGate>
      </Provider>
    );
  }
}