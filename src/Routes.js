import React, { useState } from 'react'
import { Routes as Pages,Route } from 'react-router-dom'
import About from './Pages/About/About';
import Details from './Pages/Details';
import Home from './Pages/Home/Home';

const Routes = () => {
    const [first, setfirst] = useState([])
    const [apikey] = useState(process.env.REACT_APP_TMDB_API_KEY);
    const [auth] = useState(process.env.REACT_APP_TMDB_AUTH_KEY)

    return (
        <Pages>
            <Route path="/" element={<Home apikey={apikey} auth={auth} />} />
            <Route path="/:country/:name/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
        </Pages>
    )
}

export default Routes;