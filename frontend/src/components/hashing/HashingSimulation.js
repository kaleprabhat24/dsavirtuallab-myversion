class HashingSimulation {
  constructor() {
    this.table = [];
    this.size = 10; // Default hash table size
    this.steps = [];
  }

  // Primary hash function
  hashFunction(key) {
    return key % this.size;
  }

  // Secondary hash function for double hashing
  secondHashFunction(key) {
    return 7 - (key % 7); // Example secondary hash function
  }

  // Method to initialize the hash table
  setTable(size) {
    this.size = size;
    this.table = new Array(size).fill(null); // Initialize with null
    this.steps.push([...this.table]); // Initial state for visualization
  }

  // Insert method with double hashing and overflow check
  insert(key) {
    let index = this.hashFunction(key);
    let stepSize = this.secondHashFunction(key);
    let originalIndex = index;
    let stepCount = 0;

    // Handle collisions with double hashing
    while (this.table[index] !== null && stepCount < this.size) {
      index = (originalIndex + stepCount * stepSize) % this.size;
      stepCount++;
    }

    // Overflow condition
    if (stepCount >= this.size) {
      throw new Error('Hash table overflow');
    }

    // Insert key and record step
    this.table[index] = key;
    this.steps.push([...this.table]);
  }

  getSteps() {
    return this.steps;
  }

  reset() {
    this.table = [];
    this.steps = [];
  }
}

export default HashingSimulation;
