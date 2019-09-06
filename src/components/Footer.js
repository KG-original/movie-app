import React from 'react'

function Footer() {
    return (
        <div>
            <div style={footerstyle} className="row">
                <div className="col-md-12">
                    <div className="footer p-3  text-center text-light">
                        Developed By:
                        <span className="text-warning font-weight-normal"> Kgalalelo Jannie
                        </span>
                        , Using <span className="fab fa-react"></span> React JS &amp; Redux JS
                    </div>
                </div>
            </div>
        </div>
    )
}

const footerstyle = {
    color: '#ffffff',
    background: '#000000'
}

export default Footer
