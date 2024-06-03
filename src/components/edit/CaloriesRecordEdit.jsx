import { useEffect, useState } from "react";
import styled from "styled-components";

const CaloriesRecordEdit = (props) => {

  const DEFAULT_VALUES = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: 0,
  };
  const [details, setDetails] = useState(DEFAULT_VALUES);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(details.date && details.content)
  },[details.date, details.content]);

  const onDateChangeHandler = (event) => {
    setDetails({
      ...details,
      date: event.target.value,
    });
  };
  const onMealChangeHandler = (event) => {
    setDetails({
      ...details,
      meal: event.target.value,
    });
  };
  const onContentChangeHandler = (event) => {
    setDetails({
      ...details,
      content: event.target.value,
    });
  };
  const onCaloriesChangeHandler = (event) => {
    setDetails({
      ...details,
      calories: event.target.value,
    });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    props.onFormSubmit(details);
    setDetails(DEFAULT_VALUES);
  };

  const handleCloseModal = () => {
    props.closeModal(false);
  };
  return (
    <Form onSubmit={onFormSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={onDateChangeHandler}
        value={details.date}
      />
      <label htmlFor="meal">Meal: </label>
      <select
        id="meal"
        name="meal"
        onChange={onMealChangeHandler}
        value={details.meal}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <label htmlFor="content">Content: </label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={onContentChangeHandler}
        value={details.content}
      />
      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        name="calories"
        id="calories"
        value={details.calories}
        onChange={onCaloriesChangeHandler}
        style={
          details.calories < 0
            ? {
                border: "1px solid red",
                color: "red",
                backgroundColor: "white",
              }
            : {}
        }
      />
      <Footer>
        <button disabled={!isFormValid}>Add Record</button>
        <button type="button" onClick={handleCloseModal}>Cancel</button>
      </Footer>
    </Form>
  );
};

const Form = styled.form`
  background-color: #d4e0ff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;

  label {
    color: #333;
    margin-right: 30px;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="number"],
  input[type="date"] {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    min-width: 255px;
    margin-bottom: 20px;
    font-size: 16px;
    display: block;
    box-sizing: border-box;
  }
  select {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    min-width: 255px;
    margin-bottom: 20px;
    display: block;
    box-sizing: border-box;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 20px;
  button {
    background-color: white;
    color: #012367;
    display: block;
    border: 3px solid #012367;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    flex-grow: 1;
  }
  button:disabled {
    background-color: #012367;
    opacity: 40%;
    cursor: not-allowed;
    color: white;
    border: none;
  }
`;


export default CaloriesRecordEdit;
