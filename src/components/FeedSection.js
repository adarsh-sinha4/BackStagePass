import React from 'react';
import FeedPostCard from './FeedPostCard';
import './FeedSection.css';

function FeedSection() {
  return (
    <section className="feed-section" aria-label="Community feed">
      <header className="feed-section-header">
        <div>
          <div className="feed-title" aria-label="Feed section title">
            <span>See what others </span>
            <div className="feed-avatars" aria-label="Participants avatars">
              <img src={require('../assets/png/g1.png')} alt="Participant" />
              <img src={require('../assets/png/g2.png')} alt="Participant" />
              <img src={require('../assets/png/g3.png')} alt="Participant" />
            </div>
            <span>shared</span>
          </div>
          <div className="feed-subtitle" aria-label="Feed section subtitle">
            <p className='number'>85+</p>
            <p>participants already completed</p>
          </div>
        </div>
      </header>

      <FeedPostCard
        pinned
        pinnedLabel="This is a pinned post"
        avatar={require('../assets/png/creator.png')}
        username="Russell Brunson"
        timestamp="3 hrs ago"
        content="This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level. 1️⃣ Minimum 20 minutes of sit-ups.  2️⃣ Mention Intensity.  3️⃣ Upload Media (Optional)."
      />
    </section>
  );
}

export default FeedSection;
