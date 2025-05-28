import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const questions = [
  {
    id: 1,
    title: "Singly Linked List Insertion",
    description: "Write a function to insert a new node at the end of a singly linked list.",
    difficulty: "Easy",
    examples: [
      "Input: Head = NULL, Insert = 5\nOutput: 5",
      "Input: Head = 1 -> 2 -> 3, Insert = 4\nOutput: 1 -> 2 -> 3 -> 4",
    ],
    starterCode: `#include <stdio.h>
#include <stdlib.h>

// Definition for a singly linked list node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* newNode(int val) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = val;
    node->next = NULL;
    return node;
}

// Function to insert a new node at the end of the list
void insert(struct Node** head_ref, int new_data) {
    // Write your code here
}

void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d -> ", node->data);
        node = node->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;
    
    // Insert new nodes
    insert(&head, 1);
    insert(&head, 2);
    insert(&head, 3);
    insert(&head, 4);
    
    printf("Linked List: ");
    printList(head);
    
    return 0;
}`
  },
];

export default function LinkedListPracticePlatform() {
  const [currentCode, setCurrentCode] = useState(questions[0].starterCode);
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    setOutput('Running your code...');
    
    try {
      const response = await fetch('http://localhost:5000/run_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: currentCode }),
      });

      const result = await response.json();
      if (response.ok) {
        setOutput(result.output || 'Code executed successfully.');
      } else {
        setOutput(result.error || 'An error occurred.');
      }
    } catch (error) {
      setOutput(`Failed to connect to the backend: ${error.message}`);
    }
  };

  const handleReset = () => {
    setCurrentCode(questions[0].starterCode);
    setOutput('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '90vh',
      margin: '20px',
      backgroundColor: '#f1f5f9',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      {/* Question Panel - Left Side */}
      <div style={{ 
        width: '50%', 
        height: '100%', 
        padding: '20px',
        backgroundColor: '#f9fafb',
        overflowY: 'auto',
        borderRight: '1px solid #e5e7eb'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}>
          <h2 style={{ 
            fontSize: '20px',
            fontWeight: 'bold', 
            marginBottom: '10px',
            color: '#111827'
          }}>
            {questions[0].title}
          </h2>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '4px 8px',
              backgroundColor: '#fbbf24',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              Difficulty: {questions[0].difficulty}
            </span>
            <p style={{ 
              color: '#374151', 
              marginBottom: '20px',
              fontSize: '15px'
            }}>
              {questions[0].description}
            </p>
            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              <h3 style={{ 
                fontWeight: '600', 
                marginBottom: '8px',
                fontSize: '14px',
                color: '#111827'
              }}>
                Example:
              </h3>
              <pre style={{ 
                whiteSpace: 'pre-wrap',
                fontSize: '14px',
                color: '#4b5563',
              }}>
                {questions[0].examples.join('\n')}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Code Editor Panel - Right Side */}
      <div style={{ 
        width: '50%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
      }}>
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
        }}>
          {/* Editor Header */}
          <div style={{
            padding: '10px',
            borderBottom: '1px solid #333',
            color: '#fff',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              padding: '4px 8px',
              backgroundColor: '#333',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              C
            </span>
            <span style={{ color: '#666', fontSize: '13px' }}>
              main.c
            </span>
          </div>

          {/* Code Editor */}
          <div style={{
            flex: 1,
            position: 'relative',
            backgroundColor: '#1e1e1e',
            overflow: 'hidden'
          }}>
            <textarea
              value={currentCode}
              onChange={(e) => setCurrentCode(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                padding: '10px 10px 10px 45px',
                fontFamily: 'Consolas, Monaco, monospace',
                fontSize: '14px',
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                border: 'none',
                resize: 'none',
                outline: 'none',
                lineHeight: '1.5',
                position: 'relative',
                zIndex: 1
              }}
              spellCheck="false"
            />
            {/* Line numbers */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              padding: '10px',
              backgroundColor: '#1e1e1e',
              borderRight: '1px solid #333',
              color: '#666',
              fontSize: '14px',
              lineHeight: '1.5',
              userSelect: 'none',
              textAlign: 'right',
              width: '35px'
            }}>
              {currentCode.split('\n').map((_, i) => i + 1).join('\n')}
            </div>
          </div>

          {/* Output Area */}
          {output && (
            <div style={{
              backgroundColor: '#2d2d2d',
              color: '#d4d4d4',
              padding: '15px',
              fontSize: '14px',
              borderTop: '1px solid #333'
            }}>
              <div style={{ color: '#666', marginBottom: '8px' }}>Output:</div>
              <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{output}</pre>
            </div>
          )}

          {/* Buttons at Bottom */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #333',
            backgroundColor: '#2d2d2d',
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                border: '1px solid #444',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: '#333',
                color: '#d4d4d4',
                fontSize: '14px'
              }}
            >
              <RotateCcw size={16} />
              Reset
            </button>
            <button
              onClick={handleRun}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                backgroundColor: '#0e639c',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              <Play size={16} />
              Run
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
