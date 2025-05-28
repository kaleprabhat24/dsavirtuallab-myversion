import React from 'react';
import './Hashing.css';

const Recap = () => {
  return (
    <div className="content-box">
      <h1>Double Hashing Recap</h1>
      <h2>What is Double Hashing?</h2>
      <p>
        Double hashing is a collision resolution technique used in hash tables. It utilizes two different hash functions to compute the initial position and the step size for resolving collisions. This technique helps distribute the elements uniformly across the hash table.
      </p>
      <h2>Hash Function Formula</h2>
      <p>
        Double hashing uses the following formula to compute the index in the hash table:
      </p>
      <pre>
        index = (hash1(key) + i * hash2(key)) % TABLE_SIZE
      </pre>
      <p>
        - <strong>hash1(key)</strong>: Primary hash function to calculate the base position.
        <br />
        - <strong>hash2(key)</strong>: Secondary hash function to compute the step size.
      </p>
      <h2>Hash Functions Used</h2>
      <p>
        - <strong>First Hash Function:</strong> hash1(key) = key % TABLE_SIZE
        <br />
        - <strong>Second Hash Function:</strong> hash2(key) = PRIME – (key % PRIME), where PRIME is a prime number smaller than TABLE_SIZE.
      </p>
      <h2>Advantages of Double Hashing</h2>
      <ul>
        <li>Reduces clustering issues compared to linear and quadratic probing.</li>
        <li>Provides a uniform distribution of elements across the hash table.</li>
        <li>More effective at handling collisions, especially in high-load situations.</li>
      </ul>
      <h2>Time Complexity</h2>
      <ul>
        <li><strong>Insertion:</strong> O(n)</li>
        <li><strong>Search:</strong> O(n)</li>
        <li><strong>Deletion:</strong> O(n)</li>
      </ul>
      <h2>Real-Life Applications of Double Hashing in Cryptography</h2>
      <ul>
        <li><strong>Password Hashing:</strong> Used for securely storing passwords by adding an additional layer of hashing to enhance security.</li>
        <li><strong>Blockchain and Cryptocurrency:</strong> Applied in the proof-of-work system (e.g., Bitcoin), where the SHA-256 hashing algorithm is executed twice for stronger encryption.</li>
        <li><strong>Digital Signatures:</strong> Double hashing ensures the integrity and security of transmitted data.</li>
        <li><strong>File Verification:</strong> Used to verify the integrity of files during downloads or transmissions.</li>
      </ul>
      <h2>Optimized Hashing Techniques</h2>
      <p>Beyond double hashing, other optimization techniques include:</p>
      <ul>
        <li><strong>Dynamic Resizing:</strong> Adaptive resizing of hash tables based on the load factor.</li>
        <li><strong>Cuckoo Hashing:</strong> A technique using two hash functions and tables to minimize collisions.</li>
        <li><strong>Lazy Deletion:</strong> Marking elements for deletion and removing them during maintenance, optimizing performance.</li>
      </ul>
    </div>
  );
};

export default Recap;
