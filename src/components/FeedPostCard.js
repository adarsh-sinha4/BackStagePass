import React from 'react';
import './FeedPostCard.css';
import ReactionBar from './ReactionBar';
import { ReactComponent as PinIcon } from '../assets/svg/pin.svg';

function FeedPostCard({
  pinned = false,
  pinnedLabel = 'This is a pinned post',
  avatar,
  username,
  timestamp,
  content,
}) {
  return (
    <article className="feed-post-card">
      {pinned && (
        <div className="pinned-badge" aria-label="Pinned post">
          <PinIcon className='icon'/>
          {pinnedLabel}
        </div>
      )}
      <header className="feed-post-header">
        <div className="feed-user">
          <img className="feed-avatar" src={avatar} alt={`${username} avatar`} />
          <div className="feed-user-info">
            <h4>{username}</h4>
            <span>{timestamp}</span>
          </div>
        </div>
        <button className="feed-menu" aria-label="More options">
          ⋯
        </button>
      </header>

      <div className="feed-post-content">
        <p>{content}</p>
      </div>
      <ReactionBar reactions="🙏 ❤️ 1.2M" comments={'100K'} onCommentClick={() => {}} onShareClick={() => {}} />
    </article>
  );
}

export default FeedPostCard;