import React from 'react'
import Navbar from '../components/navbar'

function Hero() {
  
  return (
    <>
    <Navbar/>
    <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">Lost something?</h1>
                    <h2 className="masthead-subheading mb-0"><span>OR</span> Found anything?</h2>
                    <a className="btn btn-primary btn-xl  text-white rounded-pill mt-5" href="/post">Post an item</a><br/>
                    <a className="btn btn-primary btn-xl  text-white rounded-pill mt-5" href="/search">Dashboard</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
        <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your Website 2023</p></div>
        </footer>

    </>
  )
}

export default Hero