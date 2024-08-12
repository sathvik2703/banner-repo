import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/banner';
import Dashboard from './components/dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Banner />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
