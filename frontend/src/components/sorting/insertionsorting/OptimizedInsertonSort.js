
import React from 'react';
import './InsertionSort.css'; // Assuming you have a CSS file for styling
import sortImage from './sort.png'; // Import the image


const OptimizedInsertionSort = () => {
    return (
        <div className="content-box">
            <h2>Optimized Insertion Sort</h2>
            <p>Optimizations and enhancements for the Insertion Sort algorithm.</p>


            <h3>1. Binary Insertion Sort</h3>
            <div className="section-with-image">
                <div>
                    <p>
                        Instead of finding the correct position for each element through linear search, use binary search to find the insertion point. This reduces the number of comparisons.
                    </p>
                    <ul>
                        <li><strong>How It Works:</strong> Use binary search to find the correct location to insert an element, then shift elements to make space.</li>
                        <li><strong>Time Complexity:</strong> The comparison complexity reduces to O(log n), but the overall time complexity remains O(n²) due to the shifting of elements.</li>
                    </ul>
                </div>
                <img src={sortImage} alt="Sort illustration" className="sort-image" />
            </div>


            <h3>2. Reduce Shifting</h3>
            <p>Minimize the number of shifts required when inserting an element.</p>
            <ul>
                <li><strong>Use a Larger Array:</strong> If you anticipate many insertions, using a larger array (or resizing) can reduce the frequency of reallocations and shifts.</li>
                <li><strong>Maintain a Sorted Section:</strong> Keep track of a sorted section of the array to reduce shifts during insertion.</li>
            </ul>


            <h3>3. Hybrid Algorithms</h3>
            <p>Combine Insertion Sort with other sorting algorithms for better performance.</p>
            <ul>
                <li><strong>Switch to Quick Sort or Merge Sort:</strong> For larger arrays, switch to more efficient algorithms like Quick Sort or Merge Sort when the size exceeds a certain threshold.</li>
                <li><strong>Use Insertion Sort for Small Arrays:</strong> Continue to use Insertion Sort for small segments within larger arrays, leveraging its efficiency on small datasets.</li>
            </ul>


            <h3>4. Adaptive Sort</h3>
            <p>Insertion Sort is naturally adaptive. You can further enhance this by:</p>
            <ul>
                <li><strong>Detecting Sorted Subarrays:</strong> Identify segments of the array that are already sorted and skip unnecessary comparisons and shifts.</li>
            </ul>
        </div>
    );
};


export default OptimizedInsertionSort;



