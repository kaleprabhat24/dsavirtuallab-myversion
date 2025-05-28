from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Create a directory to store CSV files if it doesn't exist
if not os.path.exists('feedback_data'):
    os.makedirs('feedback_data')

# General Feedback API
@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json  # Get JSON data from the request

    # Specify the file path to store feedback
    file_path = 'feedback_data/feedback.csv'
    
    # Create a DataFrame from the data
    df = pd.DataFrame([data])

    # Check if the file exists to append or create
    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'Feedback submitted successfully!'}, 201

# Feedback for Insertion Sort
@app.route('/insertion_sort_feedback', methods=['POST'])
def insertion_sort_feedback():
    data = request.json  # Get JSON data from the request
    file_path = 'feedback_data/insertion_sort_feedback.csv'
    
    df = pd.DataFrame([data])

    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'Insertion Sort feedback submitted successfully!'}, 201

# Feedback for Hashing
@app.route('/hashing_feedback', methods=['POST'])
def hashing_feedback():
    data = request.json  # Get JSON data from the request
    file_path = 'feedback_data/hashing_feedback.csv'
    
    df = pd.DataFrame([data])

    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'Hashing feedback submitted successfully!'}, 201

# Feedback for Linked Lists
@app.route('/linkedlist_feedback', methods=['POST'])
def linkedlist_feedback():
    data = request.json  # Get JSON data from the request
    file_path = 'feedback_data/linkedlist_feedback.csv'
    
    df = pd.DataFrame([data])

    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'Linked List feedback submitted successfully!'}, 201

# Feedback for BFS
@app.route('/bfs_feedback', methods=['POST'])
def bfs_feedback():
    data = request.json  # Get JSON data from the request
    file_path = 'feedback_data/bfs_feedback.csv'
    
    df = pd.DataFrame([data])

    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'BFS feedback submitted successfully!'}, 201

# Feedback for Tree Structures
@app.route('/tree_feedback', methods=['POST'])
def tree_feedback():
    data = request.json  # Get JSON data from the request
    file_path = 'feedback_data/tree_feedback.csv'
    
    df = pd.DataFrame([data])

    if os.path.exists(file_path):
        df.to_csv(file_path, mode='a', header=False, index=False)
    else:
        df.to_csv(file_path, mode='w', header=True, index=False)

    return {'message': 'Tree feedback submitted successfully!'}, 201

# New API for running C code
@app.route('/run_code', methods=['POST'])
def run_code():
    try:
        # Get the code from the request
        data = request.json
        code = data.get('code', '')

        # Save the user's code to a file
        code_file = 'user_code.c'
        with open(code_file, 'w') as file:
            file.write(code)

        # Compile the C code
        compile_result = subprocess.run(['gcc', code_file, '-o', 'user_code'], 
                                         stdout=subprocess.PIPE, 
                                         stderr=subprocess.PIPE)

        # If there are compilation errors, return them
        if compile_result.returncode != 0:
            return jsonify({'error': compile_result.stderr.decode('utf-8')}), 400

        # Run the compiled code and capture its output
        run_result = subprocess.run(['./user_code'], 
                                    stdout=subprocess.PIPE, 
                                    stderr=subprocess.PIPE)

        # If there are runtime errors, return them
        if run_result.returncode != 0:
            return jsonify({'error': run_result.stderr.decode('utf-8')}), 400

        # Return the output of the program
        return jsonify({'output': run_result.stdout.decode('utf-8')}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
