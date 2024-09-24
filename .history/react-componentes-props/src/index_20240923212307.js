import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css/'

const App = () => {
    return (
        <div className='container border p-5'>
            Meu App
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)