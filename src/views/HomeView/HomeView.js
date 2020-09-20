import React from 'react';
import mainImage from 'assets/images/pope_francis.jpg';
import { InformationCard } from 'components/InformationCard/InformationCard';
import './HomeView.scss';

export const HomeView = () => {
  return (
    <div className="home-view">
      {/* <div className="home-view__main-image">

      </div> */}
      <div className="home-view__main-image-container">
        <div className="home-view__main-image-info-container">
          <img className="home-view__main-image" src={mainImage} alt="main" />
          <div className="home-view__main-info-card-container">
            <div className="home-view__information-card">
              <InformationCard />
            </div>
          </div>
      </div>
      </div>


      <div className="home-view__main-content">

        </div>
    </div>
  );
}