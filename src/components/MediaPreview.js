import React from 'react';
import './MediaPreview.css';

function MediaPreview({ src, alt }) {
  return (
    <div className="media-preview">
      <img src={src} alt={alt} className="media-image" />
      <div className="media-play">
        <span>▶</span>
      </div>
    </div>
  );
}

export default MediaPreview;
