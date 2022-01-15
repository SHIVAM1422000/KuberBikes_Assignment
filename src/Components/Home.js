import React from 'react'
import About from './About'
import Crousel from './Crousel'
import Features from './Features'

function Home() {
    return (
        <div>
            <Crousel/>
            <Features/>
            <About/>
        </div>
    )
}

export default Home
