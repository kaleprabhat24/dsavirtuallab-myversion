import React, { useState, useEffect } from 'react';
import VisualisationComponent from './VisualisationComponent';
import './linkedlist.css';

const Visualisation = () => {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [operation, setOperation] = useState('');

  useEffect(() => {
    const operations = [
      { func: () => insertAtBeginning('A'), instruction: 'Insert A at the beginning' },
      { func: () => insertAtEnd('B'), instruction: 'Insert B at the end' },
      { func: () => insertAtIndex('C', 1), instruction: 'Insert C at index 1' },
      { func: () => insertAtIndex('D', 3), instruction: 'Insert D at index 3' },
      { func: () => insertAtIndex('E', 4), instruction: 'Insert E at index 4' },
      { func: () => deleteAtBeginning(), instruction: 'Delete the first element' },
      { func: () => deleteAtEnd(), instruction: 'Delete the last element' },
      { func: () => deleteAtIndex(1), instruction: 'Delete element at index 1' },
    ];

    if (currentIndex < operations.length) {
      setOperation(operations[currentIndex].instruction);
      const timeout = setTimeout(() => {
        operations[currentIndex].func();
        setCurrentIndex(currentIndex + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      setOperation('All operations completed');
    }
  }, [currentIndex]);

  const insertAtBeginning = (value) => {
    setList([value, ...list]);
  };

  const insertAtEnd = (value) => {
    setList([...list, value]);
  };

  const insertAtIndex = (value, index) => {
    const newList = [...list];
    newList.splice(index, 0, value);
    setList(newList);
  };

  const deleteAtBeginning = () => {
    setList(list.slice(1));
  };

  const deleteAtEnd = () => {
    setList(list.slice(0, -1));
  };

  const deleteAtIndex = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="linked-list">
      <div className="instructions">
        <h2>Current Operation:</h2>
        <p>{operation}</p>
      </div>
      <VisualisationComponent list={list} />
    </div>
  );
};

export default Visualisation;
