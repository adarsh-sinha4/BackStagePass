import React from 'react';
import './pageWrapper.css';
import { ReactComponent as BackIcon } from '../assets/svg/back.svg';
import { ReactComponent as InfoIcon } from '../assets/svg/info.svg';

const PageWrapper = ({ currentDay = 1, children, onBack }) => (
    <div>
        <header className="header">
            <div className="left-section">
                <span className="back-arrow" onClick={onBack} title="Go Back">
                    <BackIcon className="back-arrow-icon" />
                </span>
                <span className='back-label'>Back</span>
                <div className="separator" />
                <span className="days">Day {currentDay} of 9</span>
            </div>
            <div className="right-section">
                9 Day Fitness Challenge
                <span  className="info">
                    <InfoIcon className="info-icon" />
                </span>
            </div>
        </header>
        <main>
            {children}
        </main>
    </div>
);

export default PageWrapper;