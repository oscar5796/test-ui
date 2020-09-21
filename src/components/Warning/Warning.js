import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './Warning.scss';

export const Warning = () => {
  return (
    <div className="warning-container">
      <div className="warning-container__basic-text">
        <p>Speak out. Be heard</p>
        <p className="warning-container__basic-text__big-text">Be counted</p>
      </div>
      <div className="warning-container__resume-text">
        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.
      </div>
      <div className="warning-container__close-block">
        <CloseIcon style={{fontSize: "2vw"}}/>
      </div>
    </div>
  )
}