import React from 'react';
import './Hashing.css';

const HashingDoubleHashing = () => {
    return (
        <div className="content-box">
            <h2>Double Hashing Implementation and Analysis</h2>
            
            {/* YouTube Video Embed */}
            <div className="iframe-container">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/iEBEfn-Js-0" 
                title="Double Hashing Explained" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            />
            </div>
         
            <h3>Double Hashing Description</h3>
            <p>
                Double hashing is a collision resolution technique used in hash tables. It works by using two hash functions to compute two different hash values for a given key. The first hash function is used to compute the initial hash value, and the second hash function is used to compute the step size for the probing sequence.
            </p>
            <p>
                Double hashing has a low collision rate because it computes both the hash value and step size using two different functions. This reduces the probability of collisions compared to other techniques like linear or quadratic probing.
            </p>
            <p>
                However, double hashing has some drawbacks. First, using two hash functions increases the computational complexity of insertion and search operations. Second, the choice of hash functions is critical for good performance. Poorly designed hash functions can still lead to high collision rates.
            </p>

            <h3>Advantages of Double Hashing</h3>
            <ul>
                <li>One of the best forms of probing, producing a uniform distribution of records throughout the hash table.</li>
                <li>Does not create clusters in the table.</li>
                <li>Effective method for resolving collisions.</li>
            </ul>

            <h3>Double Hashing Formula</h3>
            <p>
                Double hashing is performed using the formula:
                <pre>
                    (hash1(key) + i * hash2(key)) % TABLE_SIZE
                </pre>
                Here, hash1() and hash2() are the two hash functions, and TABLE_SIZE is the size of the hash table. When a collision occurs, the index is recalculated by incrementing i.
            </p>

            <h4>Hash Functions</h4>
            <p>Typical hash functions used in double hashing are:</p>
            <ul>
                <li>First hash function: <strong>hash1(key) = key % TABLE_SIZE</strong></li>
                <li>Second hash function: <strong>hash2(key) = PRIME – (key % PRIME)</strong>, where PRIME is a prime number smaller than the TABLE_SIZE.</li>
            </ul>
            <p>A good second hash function must never evaluate to zero and should allow probing of all cells in the hash table.</p>

            <h3>Time Complexity</h3>
            <ul>
                <li>Insertion: O(n)</li>
                <li>Search: O(n)</li>
                <li>Deletion: O(n)</li>
            </ul>

            <h3>Auxiliary Space</h3>
            <p>O(size of the hash table)</p>
        </div>
       
    );
};

export default HashingDoubleHashing;