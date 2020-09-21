import React from 'react';
import { Person } from 'components/Person/Person';
import './PeopleContainer.scss';

export const PeopleContainer = (props) => {
  return (
    <div className="people-container">
      <h2>
        Votes
      </h2>
      <div className="people-container__person-list" >
      {
        props.people.map((person) => {
          return (
            <Person person={person}/>
          )
        })
      }
      </div>

    </div>
  )
}