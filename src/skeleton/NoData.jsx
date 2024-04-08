import React from 'react';

const NoData = () => {
    return (
     <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
                <img src=" "  className='w-75' alt="no data found" />
            </div>
        </div>
     </div>
    );
};

export default NoData;