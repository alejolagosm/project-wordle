function GuessList({ userGuessList }) {
  return (
    <div className="guess-results">
      {userGuessList.map((word_object, idx) => {
        if (word_object.length === 0) {
          word_object = [
            { letter: "", status: "" },
            { letter: "", status: "" },
            { letter: "", status: "" },
            { letter: "", status: "" },
            { letter: "", status: "" },
          ];
        }

        return (
          <p className="guess" key={idx}>
            {word_object.map((letter, idx2) => {
              return (
                <span className={`cell ${letter["status"]}`} key={idx2}>
                  {letter["letter"]}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
