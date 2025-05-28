import React from 'react';

const HashingFurtherReading = () => {
    console.log("Rendering Further Reading Component"); // Check if the component is loaded
    return (
        <div className="content-box">
            <h2>Further Readings/References</h2>
            <p>Here are some additional resources and references for further reading on hashing:</p>
            <ul>
                <li>
                    <a href="https://www.geeksforgeeks.org/hashing-data-structure/" target="_blank" rel="noopener noreferrer">
                        GeeksforGeeks: Hashing Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm" target="_blank" rel="noopener noreferrer">
                        Tutorialspoint: Hash Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Hash_function" target="_blank" rel="noopener noreferrer">
                        Wikipedia: Hash Function
                    </a>
                </li>
                <li>
                    <a href="https://www.coursera.org/lecture/data-structures/hash-tables-CRRvl" target="_blank" rel="noopener noreferrer">
                        Coursera: Hash Tables
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default HashingFurtherReading;
