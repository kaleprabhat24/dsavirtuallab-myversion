// src/components/hashing/OptimizedHashing.js
import React from 'react';
import './Hashing.css';

const OptimizedHashing = () => {
    return (
        <div className="content-box">
            <h2>Optimized Hashing</h2>
            <p>Optimizations and enhancements for hash table operations.</p>

            <h3>1. Optimized Hash Function Design:</h3>
            <ul>
                <li>
                    <strong>Double Hashing:</strong> Double hashing uses two hash functions to reduce collisions. Optimizing the secondary hash function to ensure it’s relatively prime to the table size can significantly improve probe distribution.
                </li>
                <li>
                    <strong>Universal Hashing:</strong> Instead of using a fixed hash function, use a set of hash functions and select one randomly for each new table instance. This reduces the chance of worst-case collisions.
                </li>
                <li>
                    <strong>Dynamic Resizing:</strong> Instead of resizing a hash table after a fixed load factor, use adaptive resizing based on actual performance, dynamically expanding the table when too many collisions occur and shrinking it when underutilized.
                </li>
            </ul>

            <h3>2. Efficient Collision Handling:</h3>
            <ul>
                <li>
                    <strong>Optimized Probing Techniques:</strong> Use a combination of linear probing and double hashing based on the load factor. For example, use linear probing at lower load factors and switch to double hashing when the load factor exceeds a certain threshold.
                </li>
                <li>
                    <strong>Cuckoo Hashing:</strong> This technique uses two hash functions and two hash tables. When a collision occurs, elements can be "kicked" between the tables, allowing for constant-time insertion and search while minimizing collision chains.
                </li>
                <li>
                    <strong>Hopscotch Hashing:</strong> This technique clusters elements within a fixed neighborhood to keep probing sequences short, allowing for faster insertions and lookups.
                </li>
            </ul>

            <h3>3. Optimized Insertion:</h3>
            <ul>
                <li>
                    <strong>Incremental Rehashing:</strong> Instead of rehashing the entire table when resizing, spread the rehashing process over multiple insertions to avoid expensive rehashing steps. This ensures insertions stay efficient even during resizing.
                </li>
                <li>
                    <strong>Bucket Chaining with Balanced Trees:</strong> When chaining is used for collision handling, store collided elements in balanced trees (like AVL or Red-Black trees) instead of linked lists, ensuring O(log n) access even in collision-heavy buckets.
                </li>
            </ul>

            <h3>4. Efficient Deletion:</h3>
            <ul>
                <li>
                    <strong>Lazy Deletion:</strong> Instead of immediately deleting elements, mark them as deleted and perform actual deletions during periodic maintenance operations. This avoids immediate reshuffling and speeds up deletion-heavy workloads.
                </li>
                <li>
                    <strong>Efficient Table Shrinking:</strong> During the deletion of elements, dynamically shrink the hash table when the load factor drops below a certain threshold, reducing space consumption without degrading performance.
                </li>
            </ul>

            <h3>5. Optimized Lookup:</h3>
            <ul>
                <li>
                    <strong>Bloom Filters for Fast Membership Testing:</strong> Use bloom filters alongside the hash table to quickly test if an element is definitely not in the table, reducing unnecessary lookups and collisions in some applications.
                </li>
                <li>
                    <strong>Cache-Aware Hash Tables:</strong> Optimize hash table layout to make use of CPU caches more effectively, reducing cache misses during lookups and improving access time.
                </li>
            </ul>
        </div>
        
    );
};

export default OptimizedHashing;
