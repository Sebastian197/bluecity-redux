import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store} >
            <div>
                <h1>hello</h1>
            </div>
        </Provider>

    );
}

export default App;
