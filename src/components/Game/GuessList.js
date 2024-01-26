import react from 'react';

function GuessList({userGuessList}) {

  return (
    <div className="guess-results">
      {userGuessList.map(element =>{
        return <p className="guess">{element}</p>
      })}
    </div>
  );
}

export default GuessList;
