import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css'

const App = () => {
    return (
        <div>
            Meu App
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)