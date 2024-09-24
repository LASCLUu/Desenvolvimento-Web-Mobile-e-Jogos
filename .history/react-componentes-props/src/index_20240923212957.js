import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css/'

const App = () => {
    return (
        <div className='container border '>
            Meu App
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)