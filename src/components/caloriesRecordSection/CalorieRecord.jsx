import styled from "styled-components";
import { CalorieRecordDate } from "./CalorieRecordDate";
import { useEffect } from "react";

const CalorieRecord = ({ date, meal, content, calories , addCalories }) => {
  if(calories < 0) {
    return null
  };

  useEffect(() => {
    addCalories(prevTotal => prevTotal + calories)

    return (() => {
      addCalories(prevTotal => prevTotal - calories)
    })
  },[]);

  return (
    <Record>
      <li>
        <CalorieRecordDate date={date} />
      </li>
      <li>{meal}</li>
      <li>{content}</li>
      <li>{calories}</li>
    </Record>
  );
};

const Record = styled.ul`
  border: 1px solid #ccc;
  border-radius: 3px;
  list-style: none;
  display: flex;
  color: #666;
  justify-content: space-around;
  padding: 10px 0;
  height: auto;
  align-items: center;
  background-color: antiquewhite;

  li:last-child {
    color: #012367;
    font-weight: bold;
  }
`;

export default CalorieRecord;
