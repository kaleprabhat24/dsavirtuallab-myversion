class InsertionSortSimulation {
  constructor() {
      this.array = [];
      this.steps = [];
  }

  // Method to initialize the array
  setArray(arr) {
      this.array = arr;
      this.steps.push([...this.array]); // Save the initial state for visualization
  }

  // Method to perform Insertion Sort and record each step
  sort() {
      const n = this.array.length;
      for (let i = 1; i < n; i++) {
          let key = this.array[i];
          let j = i - 1;

          // Shift elements of array that are greater than key
          while (j >= 0 && this.array[j] > key) {
              this.array[j + 1] = this.array[j];
              j--;
              this.steps.push([...this.array]); // Record the step for visualization
          }
          this.array[j + 1] = key;
          this.steps.push([...this.array]); // Record the array after placing the key
      }
  }

  // Method to retrieve the steps for visualization
  getSteps() {
      return this.steps;
  }

  // Utility function to reset the array and steps
  reset() {
      this.array = [];
      this.steps = [];
  }
}

export default InsertionSortSimulation;
