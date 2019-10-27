import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore';
import { loadEvents } from './features/event/eventActions';
import ReduxToastr from 'react-redux-toastr'

const store = configureStore();
store.dispatch(loadEvents())


const rootEl = document.getElementById('root')

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
        <ReduxToastr
        position='bottom-right' 
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        />
    <App />
    </BrowserRouter>
    </Provider>,rootEl)
}

if(module.hot){
    module.hot.accept('./app/layout/App', ()=>{
        setTimeout(render)
    })
}

render();