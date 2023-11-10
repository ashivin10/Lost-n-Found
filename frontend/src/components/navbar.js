import React from 'react'
function navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top mb-5">
            <div className="container px-5">
                <a className="navbar-brand" href="/">Lost-n-Found</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/profile">Your profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default navbar