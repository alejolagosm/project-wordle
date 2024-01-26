import react from 'react';

function Form({addNewGuess}) {
  
  const [valueInput, setValueInput] = react.useState("")

  return (
    <form className="guess-input-wrapper" onSubmit={e=>{
      e.preventDefault();
      addNewGuess(valueInput.toUpperCase());
      setValueInput("");
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={valueInput} onChange={e => setValueInput(e.target.value)} pattern="\w{5}" required/>
    </form>
  );
}

export default Form;
