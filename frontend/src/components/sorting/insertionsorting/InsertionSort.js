import React from 'react';
import './InsertionSort.css';

const InsertionSortExplaination = () => {
    return (
        <div className="content-box">
            <h2>Insertion Sort Implementation and Analysis</h2>

            <h3>Insertion Sort Description</h3>
            <p>
                Insertion Sort is a simple and intuitive sorting algorithm that builds a sorted array one element at a time. It works by iterating through the list, taking one element from the unsorted part, and finding the correct position for it in the sorted part of the array.
            </p>
            <p>
                This algorithm is efficient for small data sets and works well for data that is already partially sorted. It is an in-place sorting algorithm, meaning it requires only a constant amount of additional space.
            </p>
            <p>
                However, Insertion Sort has a time complexity of O(n²) in the average and worst cases, making it inefficient for larger lists compared to more advanced algorithms like Quick Sort or Merge Sort.
            </p>

            <h3>Advantages of Insertion Sort</h3>
            <ul>
                <li>Simple to implement and understand.</li>
                <li>Efficient for small data sets or nearly sorted arrays.</li>
                <li>Stable sort: does not change the relative order of elements with equal keys.</li>
            </ul>

            <h3>Insertion Sort Algorithm</h3>
            <p>
                The algorithm can be summarized with the following steps:
                <pre>
                    1. Start from the second element (index 1).
                    2. Compare the current element with the elements in the sorted part (to its left).
                    3. Shift all larger elements to the right.
                    4. Insert the current element at its correct position.
                </pre>
            </p>

            <h3>Time Complexity</h3>
            <ul>
                <li>Best Case: O(n) – occurs when the array is already sorted.</li>
                <li>Average Case: O(n²)</li>
                <li>Worst Case: O(n²) – occurs when the array is sorted in reverse order.</li>
            </ul>

            <h3>Auxiliary Space</h3>
            <p>O(1) – only a constant amount of additional space is required.</p>
        </div>
    );
};

export default InsertionSortExplaination;
