import React, {useState} from 'react';
import { Warning } from 'components/Warning/Warning';
import { InformationCard } from 'components/InformationCard/InformationCard';
import { PeopleContainer } from 'components/PeopleContainer/PeopleContainer';
import './HomeView.scss';

export const HomeView = () => {
  const [daysLeft, setDaysLeft] = useState(22);


  return (
    <div className="home-view">
      <div className="home-view__main-image-container">
        <div className="home-view__main-image-info-container">
          <div className="home-view__main-info-card-container">
            <div className="home-view__information-card">
              <InformationCard />
            </div>
          </div>
        </div>
        <div className="home-view__votations_closed">
          <div className="home-view__votations_closed__container">
            <div
              style={{ width: `calc(100vw - 10vw * ${daysLeft} / 3)` }}
              className="home-view__votations_closed__indicator"
            >
              <p>CLOSING IN</p>
            </div>
            <div className="home-view__votations_closed__arrow"></div>
            <div
              style={{ width: `calc(10vw * ${daysLeft} / 3)` }}
              className="home-view__votations_closed__indicator-rest"
            >
            </div>
            <p
              style={{left: `calc(100vw - 10vw * ${daysLeft} / 3 + 20px)`}}
              className="home-view__votations_closed__indicator-rest-text"
            >
              {daysLeft} days
            </p>
          </div>
        </div>
      </div>

      <div className="home-view__main-content">
        <Warning />
        <PeopleContainer/>
      </div>
    </div>
  );
}