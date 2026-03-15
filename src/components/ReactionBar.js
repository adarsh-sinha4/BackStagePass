import React from 'react';
import './ReactionBar.css';
import { ReactComponent as CommentIcon } from '../assets/svg/chat.svg';
import { ReactComponent as SmileyIcon } from '../assets/svg/smiley.svg';

function ReactionBar({ reactions, comments, onCommentClick, onShareClick }) {
  return (
    <div className="reaction-bar">
      <div className="reaction-left">
        <button className="reaction-button">{reactions}</button>
        <button className="action-button" type="button" onClick={onCommentClick} aria-label="Smiley">
          <SmileyIcon className="icon" />
        </button>
        <button className="action-button" type="button" onClick={onShareClick} aria-label="Share">
          <CommentIcon className="icon" />
        </button>
      </div>
      <div className="reaction-right">
        <span className="comment-count">{comments} Comments</span>
      </div>
    </div>
  );
}

export default ReactionBar;
