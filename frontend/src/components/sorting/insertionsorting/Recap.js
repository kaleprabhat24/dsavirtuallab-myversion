// src/components/insertion-sort/Recap.js
import React from 'react';
import './InsertionSort.css';
const InsertionRecap = () => {
    return (
        <div className="content-box">
            <h2>Recap</h2>
            <p>In this experiment, we delved into the Insertion Sort algorithm, which is a fundamental sorting technique used to order elements in a list or array. Below is a detailed recap of the key concepts covered:</p>

            <ul>
                <li>
                    <strong>Concept of Incremental Sorting:</strong> Insertion Sort is an incremental algorithm, meaning it builds the sorted array one item at a time. Starting from the second element, each new element is compared with those already sorted, and it's inserted into its correct position. This process is repeated until the entire array is sorted. The comparison process mimics how people naturally sort playing cards by inserting each card in its correct place relative to others.
                </li>

                <li>
                    <strong>In-place Sorting:</strong> Insertion Sort is an in-place algorithm, meaning it does not require additional memory space beyond the input array. The elements are sorted directly within the array by swapping values, thus saving memory resources compared to other algorithms like Merge Sort, which requires extra memory for temporary storage.
                </li>

                <li>
                    <strong>Algorithm Stability:</strong> One significant property of Insertion Sort is its stability. A stable sorting algorithm ensures that when two elements are equal, they maintain their original order in the sorted array. This is particularly important when sorting records based on multiple criteria (e.g., sorting students by grades and then by names).
                </li>

                <li>
                    <strong>Time Complexity Analysis:</strong> 
                    <ul>
                        <li><strong>Best-case scenario:</strong> In cases where the array is already sorted or nearly sorted, Insertion Sort performs exceptionally well. It has a time complexity of O(n), where 'n' is the number of elements in the array, as it only makes one comparison per element.</li>
                        <li><strong>Average and worst-case scenarios:</strong> In these cases, where the elements are in random or reverse order, the time complexity of Insertion Sort increases to O(n²). This is because every new element may need to be compared and swapped with all the previously sorted elements.</li>
                    </ul>
                </li>

                <li>
                    <strong>Practical Usage:</strong> Insertion Sort is ideal for smaller datasets or lists that are already mostly sorted. Its simplicity and ease of implementation make it useful in practice for such cases. It’s often used in hybrid algorithms like Timsort (used in Python) for the small chunks of data that are sorted individually before merging them.
                </li>

                <li>
                    <strong>Comparison with Other Sorting Algorithms:</strong> Although Insertion Sort is not as efficient as algorithms like Quick Sort or Merge Sort for larger datasets, its low overhead and simplicity make it useful for specific tasks. For instance, in situations where the data is nearly sorted or when only a small number of elements are to be sorted, Insertion Sort can outperform more complex algorithms due to its O(n) performance in best-case scenarios.
                </li>

                <li>
                    <strong>Real-life Analogy:</strong> Insertion Sort is often compared to the way we naturally sort a hand of cards. When arranging playing cards, we pick one card at a time and insert it into the correct position within the cards already in hand, similar to how Insertion Sort works with arrays.
                </li>

                <li>
                    <strong>Limitations:</strong> Insertion Sort’s O(n²) time complexity makes it inefficient for larger datasets. It may take significantly longer to sort arrays with a large number of elements compared to more advanced algorithms like Quick Sort (O(n log n)). However, for smaller data sizes, the simplicity of Insertion Sort makes it competitive.
                </li>
            </ul>

            <p>In conclusion, Insertion Sort offers a simple, intuitive approach to sorting, particularly suited for small or nearly sorted datasets. Its incremental nature, stability, and in-place sorting capabilities make it an essential algorithm to understand, though its quadratic time complexity limits its use for larger, unsorted datasets.</p>
        </div>
    );
};

export default InsertionRecap;
