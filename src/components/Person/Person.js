import React from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import "./Person.scss";

export const Person = ({ person }) => {

  const favorability = person.upvotes > person.downvotes;
  const upvotesPercentage =  person.upvotes / person.totalVotes;
  const downvotesPercentage = person.downvotes / person.totalVotes;
  return (
    <div className="person-container">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.65) 100%), url(${process.env.PUBLIC_URL}/${person.imageSrc}) no-repeat`,
          backgroundSize: "100%",
        }}
        className="person-container person-container__image"
      >
        <div className="person-container__info">
          <div className="person-container__info__name">
            <span style={{backgroundColor: `${favorability ?  '#2dbbb4' : '#ffb533'}`}}>
              {
                favorability ? <ThumbUpIcon style={{ fontSize: "2vw" }} className="info-card__actions__upvote--icon"/> :
                <ThumbDownAltIcon style={{ fontSize: "2vw" }} className="info-card__actions__downvote--icon"/>
              }
            </span>
            <h1>{person.name}</h1>
          </div>
          <div className="person-container__info__description">
            <p className="person-container__info__time"><strong>1 month ago</strong> in entertainment</p>
            <div className="person-container__info__resume">{person.briefDescription}</div>
            <div className="person-container__info__actions">
              <button className="person-container__info__actions__upvote">
                <ThumbUpIcon style={{ fontSize: "2vw" }} className="info-card__actions__upvote--icon"/>
              </button>
              <button className="person-container__info__actions__downvote">
                <ThumbDownAltIcon style={{ fontSize: "2vw" }} className="info-card__actions__downvote--icon"/>
              </button>
              <button className="person-container__info__actions__vote-button">
                Vote now
              </button>
            </div>
          </div>

          <div className="person-container__info__percentage">
            <div style={{ width: `calc(${upvotesPercentage}*100%)` }} className="person-container__info__percentage__good">
              <ThumbUpIcon style={{ fontSize: "2.5vw" }} className="info-card__actions__upvote--icon"/>
              <p className="person-container__info__percentage__good__text">{upvotesPercentage*100}%</p>
            </div>
            <div style={{ width: `calc(${downvotesPercentage}*100%` }} className="person-container__info__percentage__bad">
              <p className="person-container__info__percentage__bad__text">{downvotesPercentage*100}%</p>
              <ThumbDownAltIcon style={{ fontSize: "2.5vw" }} className="info-card__actions__downvote--icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
