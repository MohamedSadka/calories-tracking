import styled from "styled-components";
import { RecordList } from "./RecordList";
import { useEffect, useState } from "react";

const ListingSection = (props) => {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  

  const currentDateHandler = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  const dataFilter = (record) => {
    const recordDate = new Date(record.date);
    return (
      recordDate.getDate() === currentDate.getDate() &&
      recordDate.getMonth() === currentDate.getMonth() &&
      recordDate.getFullYear() === currentDate.getFullYear()
    );
  };
  return (
    <>
      <ListingPicker htmlFor="listingDate">Select Date</ListingPicker>
      <ListingPickerInput
        type="date"
        id="listingDate"
        value={currentDate.toISOString().split("T")[0]}
        onChange={currentDateHandler}
      />
      <RecordList records={allRecords.filter(dataFilter)} />
    </>
  );
};

const ListingPicker = styled.label`
  color: var(--theme-color-dark);
  line-height: 40px;
  font-weight: 500;
`;

const ListingPickerInput = styled.input`
  margin: 20px;
  background-color: #ccc;
  color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 225px;
  margin-bottom: 20px;
  font-size: 16px;
  box-sizing: border-box;
`;

export default ListingSection;
