import React, { useState } from 'react';
import './SavedJob.css';
import unsaveJobImg from '../../../src/assets/images/save-icon1.png'
import saveJobImg from '../../../src/assets/images/save-icon2.png'


const SaveJob = ({ userId, jobId }) => {

    const [savejob, setSaveJob] = useState(false);

    const handleClick = () => {
        setSaveJob(!savejob);
    };

    return (
        <img
            src={savejob ? saveJobImg : unsaveJobImg}
            onClick={handleClick}
            className="save-icon"
            alt="save-icon"
        />
    );
};

export default SaveJob;
