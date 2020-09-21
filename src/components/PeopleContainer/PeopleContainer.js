import React, {useEffect, useState} from 'react';
import { Person } from 'components/Person/Person';
import { useStateValue } from 'state/store';
import './PeopleContainer.scss';
import { actionTypes } from 'constants/actionTypes';

export const PeopleContainer = () => {
  const [{ appState }, dispatch] = useStateValue();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (appState.people) {
      setPeople(appState.people);
    }
  }, [appState.people]);


  const vote = (id, preference) => {
    const personIndex = people.findIndex((person) => person.id === id);
    const newPeople = people;

    switch (preference) {
      case 1:
        newPeople[personIndex] = {
          ...newPeople[personIndex],
          upvotes: newPeople[personIndex].upvotes + 1,
          totalVotes: newPeople[personIndex].totalVotes + 1,
        };
        dispatch({
          type: actionTypes.SET_NEW_DATA,
          newData: {
            people: newPeople,
          },
        });
        break;
      case 2:
        newPeople[personIndex] = {
          ...newPeople[personIndex],
          downvotes: newPeople[personIndex].downvotes + 1,
          totalVotes: newPeople[personIndex].totalVotes + 1,
        };
        dispatch({
          type: actionTypes.SET_NEW_DATA,
          newData: {
            people: newPeople,
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="people-container">
      <h2>Votes</h2>
      <div className="people-container__person-list">
        {people.length > 0
          ? people.map((person) => {
              return (
                <Person
                  vote={vote}
                  key={person.id}
                  person={person}
                  id={person.id}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}