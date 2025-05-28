// src/components/linked-list/RealLifeApplications.js
import React from 'react';
import './linkedlist.css';
import Example from './Example.png';
const LinkedListRealLifeApplications = () => {
    return (
        <div className="content-box">
            <h2>Real Life Applications</h2>
            <p><i>Examples of how linked lists are used in real-life applications and scenarios.</i></p>
            <img src={Example} alt="Example" />
            <ul>
                <li>1.Image viewer - Previous and next images are linked and can be accessed by the next and previous buttons.</li><br />
                <li>2.Previous and next page in a web browser – We can access the previous and next URL searched in a web browser by
                    pressing the back and next buttons since they are linked as a linked list.</li><br />
                <li>3.GPS navigation systems- Linked lists can be used to store and manage a list of locations and routes, allowing
                    users to easily navigate to their desired destination.</li><br />
                <li>4.Robotics- Linked lists can be used to implement control systems for robots, allowing them to navigate and
                    interact with their environment.</li><br />
                <li>5.File Systems- File systems use linked lists to represent the hierarchical structure of directories, where each
                    directory or file is represented as a node in the list.</li><br />
            </ul>
        </div>
    );
};


export default LinkedListRealLifeApplications;



