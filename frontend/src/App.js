// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';

// Sidebar components
import SortingSidebar from './components/SortingSidebar';
import InsertionSortSidebar from './components/sorting/insertionsorting/InsertionSortSidebar';
import HashingSideBar from './components/HashingSideBar';
import LinkedListSidebar from './components/LinkedListSidebar';
import BFSSidebar from './components/BFSSidebar';
import TreeSidebar from './components/TreeSidebar'; // Import Tree Sidebar

// Main section components
import DataStructures from './components/DataStructures';
import Sorting from './components/Sorting';
import LinkedList from './components/LinkedList';
import Hashing from './components/Hashing';
import Tree from './components/Tree'; // Import Tree main component

// Insertion Sort Components
import InsertionSort from './components/sorting/insertionsorting/InsertionSort';
import InsertionAim from './components/sorting/insertionsorting/Aim';
import InsertionOverview from './components/sorting/insertionsorting/Overview';
import InsertionRecap from './components/sorting/insertionsorting/Recap';
import InsertionPretest from './components/sorting/insertionsorting/Pretest';
import InsertionPosttest from './components/sorting/insertionsorting/Posttest';
import InsertionRealLifeApplications from './components/sorting/insertionsorting/RealLifeApplications';
import InsertionFurtherReadings from './components/sorting/insertionsorting/FurtherReadings';
import InsertionAnalysis from './components/sorting/insertionsorting/Analysis';
import InsertionFeedback from './components/sorting/insertionsorting/Feedback';
import OptimizedInsertionSort from './components/sorting/insertionsorting/OptimizedInsertonSort';
import InsertionSortComponent from './components/sorting/insertionsorting/InsertionSortComponent';
import InsertionVisualisation from './components/sorting/insertionsorting/InsertionVisualisation'; 
import SortPracticePlatform from './components/sorting/insertionsorting/handsonpractice'; 
import InsertionSortQuiz from './components/sorting/insertionsorting/Quiz'; 
// Linked List Components
import LinkedListAim from './components/linked-list/Aim';
import LinkedListOverview from './components/linked-list/Overview';
import LinkedListRecap from './components/linked-list/Recap';
import LinkedListPretest from './components/linked-list/Pretest';
import LinkedListPosttest from './components/linked-list/Posttest';
import LinkedListExplanation from './components/linked-list/LinkedListExplanation';
import LinkedListRealLifeApplications from './components/linked-list/RealLifeApplications';
import LinkedListFurtherReadings from './components/linked-list/FurtherReadings';
import LinkedListAnalysis from './components/linked-list/Analysis';
import LinkedListFeedback from './components/linked-list/Feedback';
import OptimizedLinkedList from './components/linked-list/OptimizedLinkedList';
import LinkedListComponent from './components/linked-list/LinkedListComponent';
import Visualisation from './components/linked-list/Visualisation'; // Main Visualisation component
import LinkedListPracticePlatform from './components/linked-list/HandsOnPractice';
import LinkedListQuiz from './components/linked-list/Quiz';
// Hashing Components
import HashingAim from './components/hashing/Aim';
import HashingOverview from './components/hashing/Overview';
import HashingRecap from './components/hashing/Recap';
import HashingPretest from './components/hashing/Pretest';
import HashingPosttest from './components/hashing/Posttest';
import HashingAnalysis from './components/hashing/Analysis';
import HashingRealLifeApplication from './components/hashing/RealLifeApplication';
import HashingFurtherReading from './components/hashing/FurtherReading';
import OptimizedHashing from './components/hashing/OptimizedHashing';
import HashingFeedback from './components/hashing/Feedback';
import HashingComponent from './components/hashing/HashingComponent';
import HashingDoubleHashing from './components/hashing/DoubleHashing';
import DoubleHashingQuiz from './components/hashing/Quiz';
// BFS Components
import BFS from './components/BFS/BFS';
import BFSAim from './components/BFS/Aim';
import BFSOverview from './components/BFS/Overview';
import BFSRecap from './components/BFS/Recap';
import BFSPretest from './components/BFS/Pretest';
import BFSPosttest from './components/BFS/Posttest';
import BFSRealLifeApplications from './components/BFS/RealLifeApplications';
import BFSFurtherReadings from './components/BFS/FurtherReadings';
import BFSAnalysis from './components/BFS/Analysis';
import BFSFeedback from './components/BFS/Feedback';
import GraphsDefinition from './components/BFS/BasicsOfGraph';
import Queues from './components/BFS/BasicsOfQueue';
import GraphTraversal from './components/BFS/GraphTraversal';
import BFSQuiz from './components/BFS/Quiz';
// Tree Components
import TreeAim from './components/tree/Aim';
import TreeOverview from './components/tree/Overview';
import TreeRecap from './components/tree/Recap';
import TreePretest from './components/tree/Pretest';
import TreePosttest from './components/tree/Posttest';
import TreeRealLifeApplications from './components/tree/RealLifeApplications';
import TreeFurtherReadings from './components/tree/FurtherReadings';
import TreeAnalysis from './components/tree/Analysis';
import TreeFeedback from './components/tree/Feedback';
import TreeExplanation from './components/tree/TreeExplanation';
import OptimizedTree from './components/tree/OptimizedTree';
import TreeComponent from './components/tree/TreeComponent';
import TreeVisualization from './components/tree/TreeVisualization';
import TreePracticePlatform from './components/tree/handsonpractice';
import TreeQuiz from './components/tree/Quiz';

import './App.css';
import BFSComponent from './components/BFS/BFSComponents';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-layout">
          <Routes>
            {/* Home and Contact */}
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/data-structures" element={<DataStructures />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/AboutUs" element={<AboutUs />} />

            {/* Sorting Routes */}
            <Route
              path="/data-structures/sorting"
              element={
                <>
                  <SortingSidebar />
                  <div className="main-content">
                    <Sorting />
                  </div>
                </>
              }
            />
            <Route
              path="/data-structures/sorting/insertionsort/*"
              element={
                <>
                  <InsertionSortSidebar />
                  <div className="main-content">
                    <Routes>
                      <Route index element={<InsertionSort />} />
                      <Route path="aim" element={<InsertionAim />} />
                      <Route path="overview" element={<InsertionOverview />} />
                      <Route path="recap" element={<InsertionRecap />} />
                      <Route path="pretest" element={<InsertionPretest />} />
                      <Route path="posttest" element={<InsertionPosttest />} />
                      <Route path="reallifeapplications" element={<InsertionRealLifeApplications />} />
                      <Route path="furtherreadings" element={<InsertionFurtherReadings />} />
                      <Route path="analysis" element={<InsertionAnalysis />} />
                      <Route path="feedback" element={<InsertionFeedback />} />
                      <Route path="optimizedinsertionsort" element={<OptimizedInsertionSort />} />
                      <Route path="simulation" element={<InsertionSortComponent />} />
                      <Route path="InsertionVisualisation" element={<InsertionVisualisation />} />
                      <Route path="handsonpractice" element={<SortPracticePlatform />} />
                      <Route path="quiz" element={<InsertionSortQuiz />} />
                    </Routes>
                  </div>
                </>
              }
            />

            {/* Linked List Routes */}
            <Route
              path="/data-structures/linked-list/*"
              element={
                <>
                  <LinkedListSidebar />
                  <div className="main-content">
                    <Routes>
                      <Route index element={<LinkedList />} />
                      <Route path="aim" element={<LinkedListAim />} />
                      <Route path="overview" element={<LinkedListOverview />} />
                      <Route path="pretest" element={<LinkedListPretest />} />
                      <Route path="posttest" element={<LinkedListPosttest />} />
                      <Route path="linkedlistexplanation" element={<LinkedListExplanation />} />
                      <Route path="recap" element={<LinkedListRecap />} />
                      <Route path="analysis" element={<LinkedListAnalysis />} />
                      <Route path="feedback" element={<LinkedListFeedback />} />
                      <Route path="reallifeapplications" element={<LinkedListRealLifeApplications />} />
                      <Route path="furtherreadings" element={<LinkedListFurtherReadings />} />
                      <Route path="optimizedlinkedlist" element={<OptimizedLinkedList />} />
                      <Route path="simulation" element={<LinkedListComponent />} />
                      <Route path="visualisation" element={<Visualisation />} />
                      <Route path="handsonpractice" element={<LinkedListPracticePlatform />} />
                      <Route path="quiz" element={<LinkedListQuiz />} />
                    </Routes>
                  </div>
                </>
              }
            />

            {/* Hashing Routes */}
            <Route
              path="/data-structures/hashing/*"
              element={
                <>
                  <HashingSideBar />
                  <div className="main-content">
                    <Routes>
                    <Route index element={<Hashing />} />
                      <Route path="aim" element={<HashingAim />} />
                      <Route path="overview" element={<HashingOverview />} />
                      <Route path="recap" element={<HashingRecap />} />
                      <Route path="pretest" element={<HashingPretest />} />
                      <Route path="posttest" element={<HashingPosttest />} />
                      <Route path="reallifeapplication" element={<HashingRealLifeApplication />} />
                      <Route path="furtherreading" element={<HashingFurtherReading />} />
                      <Route path="analysis" element={<HashingAnalysis />} />
                      <Route path="optimizedhashing" element={<OptimizedHashing />} />
                      <Route path="feedback" element={<HashingFeedback />} />
                      <Route path="simulation" element={<HashingComponent />} />
                      <Route path="doublehashing" element={<HashingDoubleHashing />} />
                      <Route path="quiz" element={<DoubleHashingQuiz />} />
                    </Routes>
                  </div>
                </>
              }
            />

            {/* BFS Routes */}
            <Route
              path="/data-structures/bfs/*"
              element={
                <>
                  <BFSSidebar />
                  <div className="main-content">
                    <Routes>
                      <Route index element={<BFS />} />
                      <Route path="aim" element={<BFSAim />} />
                      <Route path="overview" element={<BFSOverview />} />
                      <Route path="recap" element={<BFSRecap />} />
                      <Route path="pretest" element={<BFSPretest />} />
                      <Route path="posttest" element={<BFSPosttest />} />
                      <Route path="reallifeapplications" element={<BFSRealLifeApplications />} />
                      <Route path="furtherreadings" element={<BFSFurtherReadings />} />
                      <Route path="bfssimulation" element={<BFSComponent />} />
                      <Route path="analysis" element={<BFSAnalysis />} />
                      <Route path="feedback" element={<BFSFeedback />} />
                      <Route path="BasicsOfGraph" element={<GraphsDefinition />} />
                      <Route path="BasicsOfQueue" element={<Queues />} />
                      <Route path="GraphTraversal" element={<GraphTraversal />} />
                      <Route path="quiz" element={<BFSQuiz />} />
                    </Routes>
                  </div>
                </>
              }
            />

            {/* Tree Routes */}
            <Route
              path="/data-structures/tree/*"
              element={
                <>
                  <TreeSidebar />
                  <div className="main-content">
                    <Routes>

                      <Route index element={<Tree />} />
                      <Route path="aim" element={<TreeAim />} />
                      <Route path="overview" element={<TreeOverview />} />
                      <Route path="recap" element={<TreeRecap />} />
                      <Route path="pretest" element={<TreePretest />} />
                      <Route path="posttest" element={<TreePosttest />} />
                      <Route path="reallifeapplications" element={<TreeRealLifeApplications />} />
                      <Route path="furtherreadings" element={<TreeFurtherReadings />} />
                      <Route path="analysis" element={<TreeAnalysis />} />
                      <Route path="feedback" element={<TreeFeedback />} />
                      <Route path="treeexplanation" element={<TreeExplanation />} />
                      <Route path="optimizedtree" element={<OptimizedTree />} />
                      <Route path="simulation" element={<TreeComponent />} />
                      <Route path="treevisualization" element={<TreeVisualization />} />
                      <Route path="handsonpractice" element={<TreePracticePlatform />} />
                      <Route path="quiz" element={<TreeQuiz />} />
                    </Routes>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

