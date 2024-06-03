import styled from "styled-components";

export const CalorieRecordDate = ({ date }) => {
  const parsedDate = new Date(date);
  const month = parsedDate.toLocaleString("default", { month: "long" });
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();
  return (
    <RecordDate>
      <Month>{month}</Month>
      <Day>{day}</Day>
      <Year>{year}</Year>
    </RecordDate>
  );
};

const RecordDate = styled.div`
  background-color: white;
  border: 3px solid #012367;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
`;

const Month = styled.span`
  color: darkred;
  font-weight: bold;
  font-size: 0.5rem;
`;
const Day = styled.span`
  color: black;
  font-weight: 200;
  font-size: 1.2rem;
`;
const Year = styled.span`
  color: #666;
  font-size: 0.6rem;
`;
