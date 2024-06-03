import styled from "styled-components";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import { useEffect, useState } from "react";
import ListingSection from "./components/caloriesRecordSection/ListingSection";
import Modal from "react-modal";

const LOCALSTORAGE_KEY = "maleCalories";

function App() {
  const [records, setRecords] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const saveData = () => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(records));
  };

  const loadData = () => {
    const localStorageRecords = localStorage.getItem(LOCALSTORAGE_KEY);
    
    if (localStorageRecords != null && localStorageRecords !== "undefined") {
      const parsedRecords = JSON.parse(localStorageRecords);
      const recordsWithNumbers = parsedRecords.map((record) => ({
        ...record, 
        calories: Number(record.calories)
      }))
      setRecords(recordsWithNumbers);
    } else {
      setRecords([]);
    }
  };

  useEffect(() => {
    if (!records) {
      loadData();
    } else {
      saveData();
    }
  }, [records]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const formSubmit = (details) => {
    const formattedValue = {
      ...details,
      id: crypto.randomUUID(),
      date: new Date(details.date),
      
    };
    setRecords((prevState) => [formattedValue, ...prevState]);

    closeModal();
  };
  return (
    <Container className="App">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <CaloriesRecordEdit
          onFormSubmit={formSubmit}
          closeModal={setModalIsOpen}
        />
      </Modal>
      {records && <ListingSection allRecords={records} />}
      <OpenModalButton onClick={openModal}>Track Food</OpenModalButton>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const OpenModalButton = styled.button`
  background-color: white;
  color: #012367;
  display: block;
  border: 2px solid #012367;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  flex-grow: 1;
  width: 100%;
  cursor: pointer;
  max-width: 250px;
  margin: auto;
  border-radius: 15px;
`;

export default App;
