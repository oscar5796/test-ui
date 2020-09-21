import React from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import WikiLogo from 'assets/icons/wikipedia-logo.svg';
import "./InformationCard.scss";

export const InformationCard = () => {
  return (
    <div className="info-card">
      <div className="info-card__person-info">
        <span>What's your opinion on </span>
        <h1>Pope Francis?</h1>
        <p className="info-card__person-info__resume">
          He's taking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
        </p>
        <span className="info-card__person-info__wiki-logo"><img src={WikiLogo} alt="wiki-logo" /> <a className="info-card__person-info__more" href="https://en.wikipedia.org/wiki/Pope_Francis">More information</a></span>
        <h3>What's Your Verdict?</h3>
      </div>
      <div className="info-card__actions">
        <button aria-label="upvote" className="info-card__actions__upvote">
          <ThumbUpIcon style={{ fontSize: "3vw" }} className="info-card__actions__upvote--icon"/>
        </button>
        <button aria-label="downvote" className="info-card__actions__downvote">
          <ThumbDownAltIcon style={{ fontSize: "3vw" }} className="info-card__actions__downvote--icon"/>
        </button>
      </div>
    </div>
  );
};
