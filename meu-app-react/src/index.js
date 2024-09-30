import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
    return(
        <div className='container border mt-2'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center'>AAAAAAAAAAAAAAAAAA</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col-xl-3 col-lg-6">
                    <div className="card">
                        <div className="card-header text-muted">22/04/2024</div>
                        <div className="d-flex align">
                            <i className="fa-solid fa-hdd fa-2x"></i>
                            <div className="border flex-grow">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD A400</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card">
                        <div className="card-header text-muted">22/04/2024</div>
                        <div className="card-body d-flex">
                            <i className="fa-solid fa-hdd fa-2x"></i>
                            <div className="border flex-grow">
                                <h4 className="text-center">Gamepad</h4>
                                <p className="text-center">8BitDo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card">
                        <div className="card-header text-muted">22/04/2024</div>
                        <div className="card-body d-flex">
                            <i className="fa-solid fa-hdd fa-2x"></i>
                            <div className="border flex-grow">
                                <h4 className="text-center">Processador</h4>
                                <p className="text-center">Ryzen 7 5800x3d</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card">
                        <div className="card-header text-muted">22/04/2024</div>
                        <div className="card-body d-flex">
                            <i className="fa-solid fa-hdd fa-2x"></i>
                            <div className="border flex-grow">
                                <h4 className="text-center">Monitor</h4>
                                <p className="text-center">Samsung Odyssey Oled G6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root') 
)

