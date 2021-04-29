import React from "react";
import FlatsApp from "./components/FlatsApp/FlatsApp";
import {Provider} from "react-redux";
import store from "./store/reduxStore"

const App = () => {
    return (
        <Provider store={store}>
            <FlatsApp/>
        </Provider>
    )

}

export default App;