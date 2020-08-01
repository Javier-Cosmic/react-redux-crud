import React, { Suspense } from 'react';
import './assets/css/styles.css';
const MainUser = React.lazy(() => import('./components/MainUser'));

function App() {
    return (
        <Suspense fallback=''>
            <main className='container'>
                <MainUser />
            </main>
        </Suspense>
    );
}

export default App;
