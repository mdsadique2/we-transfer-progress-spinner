import React from 'react';
import RadialProgress from '../RadialProgress';
import './style.css';

const Loader = (props) => {
    return (
        <RadialProgress currentProgress={25} showProgressValue={false}/>
    );
}

export default Loader;