import React from 'react';
import './InsertionSort.css';
import cardSortImage from './cardsort.png';  // Importing the image


const InsertionRealLifeApplications = () => {
    return (
        <div className="content-box">
            <h2>Real-Life Applications of Insertion Sort</h2>
            <p>Insertion Sort is a simple yet effective algorithm for sorting small datasets and has several real-life applications:</p>


            <ul>
                <li className="card-sorting-point">
                    <div>
                        <strong>Sorting Playing Cards:</strong>
                        Insertion Sort mimics the process of sorting a hand of playing cards. You pick up one card at a time and place it in the correct position among the already sorted cards.
                    </div>
                    <img src={cardSortImage} alt="Card sorting example" className="card-sort-image" />
                </li>
                <li>
                    <strong>Small Dataset Sorting:</strong>
                    For small sets of data where the overhead of more complex sorting algorithms isn’t justified, Insertion Sort is efficient.
                </li>
                <li>
                    <strong>Online Algorithms:</strong>
                    Insertion Sort is used in online algorithms, where data arrives sequentially and needs to be sorted in real-time, such as processing transactions in banking.
                </li>
                <li>
                    <strong>Maintaining a Sorted List:</strong>
                    Insertion Sort is used to maintain a sorted list, where elements are inserted one at a time in the correct position, such as in scheduling algorithms and priority queues.
                </li>
                <li>
                    <strong>Educational Purposes:</strong>
                    Insertion Sort is widely used as a teaching tool for algorithm design because of its simplicity and the clarity with which it demonstrates algorithmic principles.
                </li>
            </ul>
        </div>
    );
};


export default InsertionRealLifeApplications;


