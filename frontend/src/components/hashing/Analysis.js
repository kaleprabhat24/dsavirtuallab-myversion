import React, { useState, useEffect } from 'react';
import './Hashing.css';

const tableSize = 10;
const hashTableInitial = Array(tableSize).fill(null);

// Primary hash function (modulo)
const hashFunction1 = (key) => key % tableSize;

// Secondary hash function (double hashing probe)
const hashFunction2 = (key) => 5 - (key % 5); // Use prime less than tableSize (e.g., 5)

const Analysis = () => {
    const [hashTable, setHashTable] = useState(hashTableInitial);
    const [log, setLog] = useState([]);
    const [steps, setSteps] = useState(0);
    const [highlightedIndexes, setHighlightedIndexes] = useState([]); // Track all visited indexes
    
    const data = [93, 73, 44, 13]; // The data points from your example (you can add more)

    useEffect(() => {
        if (steps < data.length) {
            const timeout = setTimeout(() => {
                insertDoubleHashing(data[steps]);
                setSteps(steps + 1);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [steps]);

    // Inserting with double hashing
    const insertDoubleHashing = (key) => {
        let newTable = [...hashTable];
        let i = hashFunction1(key);
        let h2 = hashFunction2(key);
        let probe = 1;
        let indexesVisited = [i]; // Start by visiting the initial index
        
        const logs = [...log];
        logs.push(`Inserting ${key}: Initial index = ${i}`);

        while (newTable[i] !== null) {
            logs.push(`Collision at index ${i}, calculating next index using secondary hash h2(${key}) = ${h2}`);
            i = (i + probe * h2) % tableSize;
            indexesVisited.push(i); // Track the next index visited
            logs.push(`Next index = ${i}`);
            probe++;
        }
        
        newTable[i] = key;
        logs.push(`Inserted ${key} at index ${i}`);
        
        setHashTable(newTable);
        setLog(logs);
        setHighlightedIndexes(indexesVisited); // Update the indexes visited during insertion
    };

    return (
        <div className="content-box">
            <h2>Double Hashing Demonstration</h2>
            <div className="hash-table">
                {hashTable.map((value, index) => (
                    <div 
                        key={index} 
                        className={`hash-slot ${value !== null ? 'filled' : ''} ${highlightedIndexes.includes(index) ? 'highlight' : ''}`}
                    >
                        <div>{index}</div>
                        <div>{value !== null ? value : 'Empty'}</div>
                    </div>
                ))}
            </div>

            <div className="log-section">
                <h3>Logs</h3>
                {log.map((entry, index) => (
                    <div key={index} className="log-entry">{entry}</div>
                ))}
            </div>
        </div>
    );
};

export default Analysis;
