// // src/components/linked-list/RealLifeApplications.js
// import React from 'react';

// const BFSRealLifeApplications = () => {
//     return (
//         <div>
//             <h2>Real Life Applications</h2>
//             <p>Examples of how linked lists are used in real-life applications and scenarios.</p>
//             <ul>
//                 <li>1.Image viewer - Previous and next images are linked and can be accessed by the next and previous buttons.</li><br />
//                 <li>2.Previous and next page in a web browser – We can access the previous and next URL searched in a web browser by 
//                     pressing the back and next buttons since they are linked as a linked list.</li><br />
//                 <li>3.GPS navigation systems- Linked lists can be used to store and manage a list of locations and routes, allowing 
//                     users to easily navigate to their desired destination.</li><br />
//                 <li>4.Robotics- Linked lists can be used to implement control systems for robots, allowing them to navigate and 
//                     interact with their environment.</li><br />
//                 <li>5.File Systems- File systems use linked lists to represent the hierarchical structure of directories, where each 
//                     directory or file is represented as a node in the list.</li><br />
//             </ul>
//         </div>
//     );
// };

// export default BFSRealLifeApplications;
// src/components/bfs/RealLifeApplications.js
import React from 'react';
import './BFS.css';
const BFSRealLifeApplications = () => {
    return (
        <div className="content-box">
            <h2>Real Life Applications of Breadth First Search (BFS)</h2>
            <p>Breadth First Search (BFS) is widely used in various real-life applications, including:</p>
            <ul>
                <li>1. **Social Networks** - BFS is used to find the shortest path between users, suggesting friends or connections based on mutual friends.</li><br />
                <li>2. **Web Crawlers** - Search engines utilize BFS to crawl the web, systematically visiting all the links on a page and adding them to their index.</li><br />
                <li>3. **Networking** - In computer networks, BFS helps in broadcasting packets to all nodes, ensuring that data reaches every device in a network efficiently.</li><br />
                <li>4. **GPS Navigation** - BFS is used in GPS systems to find the shortest route from one location to another, exploring all possible paths before selecting the optimal one.</li><br />
                <li>5. **Game Development** - In AI for games, BFS can be used to determine the best moves by exploring all possible game states before deciding on the next action.</li><br />
            </ul>
        </div>
    );
};

export default BFSRealLifeApplications;
