function Banner({ winner, guess_number, answer }) {
  return winner ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong> {guess_number} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
