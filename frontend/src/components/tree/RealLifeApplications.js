import React from 'react';
import './tree.css'; // Shared CSS file for tree styling

const TreeRealLifeApplications = () => {
    return (
        <div className="content-box">
            <h2>Real Life Applications of Trees</h2>
            <p>Trees are a versatile data structure and are extensively used in real-world applications. Below are some examples of how trees are applied in various fields:</p>
            
            <ul className="application-list">
                <br />  <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
    <img 
        src="https://docs.oracle.com/en/cloud/saas/human-resources/24d/fawhr/images/per_treespositions_02_20037876.png" 
        alt="File System Tree Structure" 
        className="app-image" 
        style={{ width: '700px' }} // Set width here
    />
</div>

           <br />
                <li>
                    <strong>1. File Systems:</strong> Most operating systems use tree structures to represent the hierarchy of directories and files. Each directory is a node, and files or subdirectories are its children.
                    <br />
                    
                </li>
                <br />
                <li>
                    <strong>2. Databases:</strong> B-trees and B+ trees are commonly used in databases to index and quickly retrieve data, ensuring efficient data storage and search operations.
                    <br />
                  
                </li>
                <br />
                <li>
                    <strong>3. Web Page DOM (Document Object Model):</strong> The structure of a web page is represented as a tree where each HTML element is a node, allowing hierarchical organization and manipulation of content.
                    <br />
                   
                </li>
                <br />
                <li>
                    <strong>4. Network Routing:</strong> Trees are used to model network routing protocols like spanning trees, which help in finding the most efficient path for data transmission between routers.
                    <br />
                    
                </li>
                <br />
                <li>
                    <strong>5. Artificial Intelligence (AI):</strong> Decision trees are widely used in machine learning algorithms for classification and regression tasks. They represent decisions and their possible consequences in a tree structure.
                    <br />
                    
                </li>
                <br />
                <li>
                    <strong>6. Compilers:</strong> Abstract Syntax Trees (ASTs) are used by compilers to represent the structure of source code, making it easier to process and optimize during the compilation process.
                    <br />
                    
                </li>
                <br />
            </ul>
        </div>
    );
};

export default TreeRealLifeApplications;
