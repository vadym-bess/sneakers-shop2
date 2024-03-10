import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center', marginTop: '300px' }}>
    <h2>OOOps... Page not found.</h2>
    <div style={{ position: 'relative'}}>
        <Link to="/">
              <button style={{ width: '270px', height:'60px', border: 'none', backgroundColor: 'lightGreen', color: 'white',fontSize:'25px', borderRadius: '10px', cursor: 'pointer'}}>Return to main</button>
        </Link>
    </div>
</div>
    )
}

export default NotFound;