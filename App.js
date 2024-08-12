import React, { useState } from 'react';
import Banner from './Banner';
import Dashboard from './Dashboard';

function App() {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="App">
            <Banner showBanner={showBanner} />
            <Dashboard setShowBanner={setShowBanner} />
        </div>
    );
}

export default App;
