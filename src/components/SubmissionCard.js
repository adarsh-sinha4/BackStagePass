import React from 'react';
import ConfettiHeader from './ConfettiHeader';
import MediaPreview from './MediaPreview';
import ReactionBar from './ReactionBar';
import './SubmissionCard.css';

function SubmissionCard() {
  return (
    <div>
      <div className="spacer" aria-hidden="true">
        <ConfettiHeader title="Your Submission" />
      </div>
      <div className="submission-card" aria-label="Your submission">
        <div className="submission-body">
          <header className="submission-meta">
            <div className="user">
              <img
                className="avatar"
                src={require('../assets/png/admin.png')}
                alt="Ashraf Idrishi"
              />
              <div className="user-info">
                <h3>Ashraf Idrishi</h3>
                <span>1d</span>
              </div>
            </div>
            <button className="menu-button" aria-label="More options">
              ⋯
            </button>
          </header>

          <p className="submission-text">
            Today's challenge workout completed—feeling stronger already
          </p>

          <MediaPreview
            src={require('../assets/png/content.png')}
            alt="Person doing sit-ups"
          />

          <ReactionBar reactions="🙏 ❤️ 18" comments={10} />
        </div>
      </div>
    </div>
  );
}

export default SubmissionCard;