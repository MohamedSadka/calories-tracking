import styled from "styled-components";
import CalorieRecord from "./CalorieRecord";
import { useState } from "react";

export const RecordList = ({ records }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const result = records?.length ? (
    <Items>
      {records.map((record) => (
        <li key={record.id}>
          {record.calories >= 0 ? (
            <CalorieRecord
              date={record.date}
              meal={record.meal}
              content={record.content}
              calories={record.calories}
              addCalories={setTotalCalories}
            />
          ) : null}
        </li>
      ))}
    </Items>
  ) : (
    <Placeholder>No records added for this date</Placeholder>
  );

  return (
    <>
      {result}
      <label>Total Calories {totalCalories}</label>
    </>
  );
};

const Items = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Placeholder = styled.p`
  height: 60px;
  width: 100%;
  border: 1px solid #012367;
  border-radius: 10px;
  text-align: center;
  line-height: 60px;
  margin: 20px 0;
  font-size: 20px;
  color: #012367;
`;
