import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><AiFillCheckCircle className='text-green-500 mr-2'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    
};

export default Feature;