import reducer from './bugs'
import {configureStore} from '@reduxjs/toolkit';

export default function(){
    // return createStore(reducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     );

    return configureStore({
        reducer
    })
};