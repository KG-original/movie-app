import React from 'react'

function Footer() {
    return (
        <div style={footerstyle}>
            <div className="col-md-12">
                <div className="footer p-3  text-center text-light">
                    Developed By:
                    <span className="text-warning font-weight-normal"> Kgalalelo Jannie
                    </span>
                    , Using <i className="fab fa-react"></i> React JS &amp; Redux JS
                </div>
            </div>
        </div>
    )
}

const footerstyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    background: '#FF1919',
    color: 'white',
    textAlign: 'center',
}

export default Footer
