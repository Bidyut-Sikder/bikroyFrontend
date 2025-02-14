import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LegalContentSkeleton = () => {
    return (
       
        <div style={{ display: 'flex' }}>
        <Skeleton containerClassName="flex-1" />

      </div>
    );
};

export default LegalContentSkeleton;
