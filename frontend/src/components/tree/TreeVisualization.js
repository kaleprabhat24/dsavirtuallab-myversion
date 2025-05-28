import { useState, useEffect, useCallback } from 'react';

const generateRandomNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 10) {
    numbers.add(Math.floor(Math.random() * 90) + 10);
  }
  return Array.from(numbers);
};

const TreeVisualization = () => {
  const [nodes, setNodes] = useState([]);
  const [numbers] = useState(generateRandomNumbers());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [operation, setOperation] = useState('insert');

  const colors = {
    nodeColors: [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
      '#D4A5A5', '#9B6B6B', '#E0BBE4', '#957DAD', '#4B4453'
    ]
  };

  const getRandomNodeColor = useCallback(() => {
    return colors.nodeColors[Math.floor(Math.random() * colors.nodeColors.length)];
  }, []);

  const insertNode = useCallback((value) => {
    setNodes(prevNodes => {
      const newNodes = [...prevNodes];
      const nodeColor = getRandomNodeColor();
      
      if (newNodes.length === 0) {
        setExplanation(`🌱 Adding root node: ${value}`);
        return [{
          value,
          x: 50,
          y: 10,
          level: 0,
          color: nodeColor,
          animation: 'pop-in'
        }];
      }

      let currentNode = newNodes[0];
      let level = 1;
      let explanation = `🎯 Inserting ${value}: `;

      while (true) {
        if (value < currentNode.value) {
          explanation += `${value} < ${currentNode.value} ⬅️ `;
          const leftChild = newNodes.find(n => 
            n.parentValue === currentNode.value && n.isLeft
          );
          
          if (!leftChild) {
            const x = currentNode.x - (40 / Math.pow(level, 0.9));
            const y = currentNode.y + 18;
            newNodes.push({
              value,
              x,
              y,
              level,
              parentValue: currentNode.value,
              isLeft: true,
              color: nodeColor,
              animation: 'pop-in'
            });
            break;
          }
          currentNode = leftChild;
        } else {
          explanation += `${value} > ${currentNode.value} ➡️ `;
          const rightChild = newNodes.find(n => 
            n.parentValue === currentNode.value && !n.isLeft
          );
          
          if (!rightChild) {
            const x = currentNode.x + (40 / Math.pow(level, 0.9));
            const y = currentNode.y + 18;
            newNodes.push({
              value,
              x,
              y,
              level,
              parentValue: currentNode.value,
              isLeft: false,
              color: nodeColor,
              animation: 'pop-in'
            });
            break;
          }
          currentNode = rightChild;
        }
        level++;
      }
      
      setExplanation(explanation);
      return newNodes;
    });
  }, [getRandomNodeColor]);

  const deleteNode = useCallback((value) => {
    setNodes(prevNodes => {
      const nodeToDelete = prevNodes.find(n => n.value === value);
      if (!nodeToDelete) return prevNodes;

      setExplanation(`🗑️ Removing node: ${value}`);
      return prevNodes.map(node => 
        node.value === value ? { ...node, animation: 'pop-out' } : node
      );
    });

    setTimeout(() => {
      setNodes(currentNodes => currentNodes.filter(n => n.value !== value));
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (operation === 'insert') {
        if (currentIndex < numbers.length) {
          insertNode(numbers[currentIndex]);
          setHighlightedNode(numbers[currentIndex]);
          setCurrentIndex(prev => prev + 1);
          setTimeout(() => setHighlightedNode(null), 1000);
        } else {
          setOperation('delete');
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex < numbers.length) {
          deleteNode(numbers[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setOperation('insert');
          setCurrentIndex(0);
          const newNumbers = generateRandomNumbers();
          numbers.splice(0, numbers.length, ...newNumbers);
        }
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [operation, currentIndex, numbers, insertNode, deleteNode]);

  const styles = {
    container: {
      padding: '1.5rem',
      // Changing the background to an orange gradient
      background: 'linear-gradient(135deg, #ffddb3 0%, #ffb566 100%)',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #7928ca, #ff0080)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    arrayDisplay: {
      background: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      fontFamily: 'monospace',
      fontSize: '1.2rem',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    arrayBracket: {
      color: '#6b46c1',
      fontWeight: 'bold',
      padding: '0 0.5rem',
    },
    currentElement: {
      background: 'linear-gradient(to right, #7928ca, #ff0080)',
      color: 'white',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
      transform: 'scale(1.1)',
    },
    normalElement: {
      padding: '0.25rem 0.5rem',
    },
    comma: {
      color: '#718096',
      marginRight: '0.25rem',
    },
    explanationBox: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      border: '1px solid rgba(107, 70, 193, 0.2)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    svg: {
      width: '100%',
      height: '600px',
      background: 'white',
      borderRadius: '0.75rem',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      padding: '1rem',
    },
  };
  

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Dynamic Binary Search Tree
      </h2>

      <div style={styles.arrayDisplay}>
        <span style={styles.arrayBracket}>[</span>
        {numbers.map((num, idx) => (
          <span key={idx}>
            <span style={currentIndex === idx ? styles.currentElement : styles.normalElement}>
              {num}
            </span>
            {idx < numbers.length - 1 && <span style={styles.comma}>, </span>}
          </span>
        ))}
        <span style={styles.arrayBracket}>]</span>
      </div>
      
      <div style={styles.explanationBox}>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#4a5568', fontWeight: 500 }}>
          {explanation || "Watch the tree grow and shrink! 🌳"}
        </p>
      </div>

      <svg 
        viewBox="0 0 100 100" 
        style={styles.svg}
      >
        {nodes.map((node, i) => {
          if (!node.parentValue) return null;
          const parentNode = nodes.find(n => n.value === node.parentValue);
          if (!parentNode) return null;

          return (
            <line
              key={`edge-${i}`}
              x1={parentNode.x}
              y1={parentNode.y}
              x2={node.x}
              y2={node.y}
              stroke={node.color || '#6366f1'}
              strokeWidth="0.8"
              style={{
                opacity: node.animation === 'pop-out' ? 0 : 1,
                transition: 'all 0.5s ease'
              }}
            />
          );
        })}
        
        {nodes.map((node, i) => (
          <g 
            key={`node-${i}`}
            style={{
              transform: node.animation === 'pop-out' ? 'scale(0)' : 'scale(1)',
              transition: 'all 0.5s ease'
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="3.5"
              fill={node.value === highlightedNode ? '#f472b6' : node.color || '#6366f1'}
              stroke="white"
              strokeWidth="0.5"
              style={{
                transition: 'all 0.3s ease',
                filter: node.value === highlightedNode ? 'drop-shadow(0 0 3px rgba(244, 114, 182, 0.8))' : 'none'
              }}
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="2.5"
              fill="white"
              fontWeight="bold"
              style={{ pointerEvents: 'none' }}
            >
              {node.value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TreeVisualization;