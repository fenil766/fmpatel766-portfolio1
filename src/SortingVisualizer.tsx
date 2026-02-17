import React, { useState, useEffect, useRef } from 'react';

type SortingMethod = 'bubble' | 'selection' | 'insertion' | 'quick' | 'merge';

const SortingVisualizer: React.FC = () => {
  const [arraySize, setArraySize] = useState<number>(20);
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [sortingMethod, setSortingMethod] = useState<SortingMethod>('bubble');
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState<number>(50);
  const [barGap, setBarGap] = useState<number>(2);
  const isSortingRef = useRef<boolean>(false);

  // Generate random array on mount
  useEffect(() => {
    generateRandomArray();
  }, []);

  const generateRandomArray = (): void => {
    if (sorting) return;
    const newArray: number[] = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 20);
    }
    setArray(newArray);
    setComparingIndices([]);
    setSortedIndices([]);
  };

  const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const bubbleSort = async (): Promise<void> => {
    const arr = [...array];
    const n = arr.length;
    const sorted: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return;
        
        setComparingIndices([j, j + 1]);
        await sleep(101 - speed);

        if (arr[j] > arr[j + 1]) {
          // Swap
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
        }
      }
      sorted.push(n - 1 - i);
      setSortedIndices([...sorted]);
    }
    sorted.push(0);
    setSortedIndices([...sorted]);
    setComparingIndices([]);
  };

  const selectionSort = async (): Promise<void> => {
    const arr = [...array];
    const n = arr.length;
    const sorted: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      for (let j = i + 1; j < n; j++) {
        if (!isSortingRef.current) return;
        
        setComparingIndices([minIdx, j]);
        await sleep(101 - speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
      }
      
      sorted.push(i);
      setSortedIndices([...sorted]);
    }
    sorted.push(n - 1);
    setSortedIndices([...sorted]);
    setComparingIndices([]);
  };

  const insertionSort = async (): Promise<void> => {
    const arr = [...array];
    const n = arr.length;
    const sorted: number[] = [0];
    setSortedIndices([0]);

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        if (!isSortingRef.current) return;
        
        setComparingIndices([j, j + 1]);
        await sleep(101 - speed);

        arr[j + 1] = arr[j];
        setArray([...arr]);
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      sorted.push(i);
      setSortedIndices([...sorted]);
    }
    setComparingIndices([]);
  };

  const quickSort = async (): Promise<void> => {
    const arr = [...array];
    const sorted: number[] = [];

    const partition = async (low: number, high: number): Promise<number> => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (!isSortingRef.current) return -1;
        
        setComparingIndices([j, high]);
        await sleep(101 - speed);

        if (arr[j] < pivot) {
          i++;
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setArray([...arr]);
        }
      }

      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      setArray([...arr]);
      
      return i + 1;
    };

    const quickSortHelper = async (low: number, high: number): Promise<void> => {
      if (low < high) {
        const pi = await partition(low, high);
        if (pi === -1) return;
        
        sorted.push(pi);
        setSortedIndices([...sorted]);
        
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      } else if (low === high) {
        sorted.push(low);
        setSortedIndices([...sorted]);
      }
    };

    await quickSortHelper(0, arr.length - 1);
    setComparingIndices([]);
  };

  const mergeSort = async (): Promise<void> => {
    const arr = [...array];

    const merge = async (left: number, mid: number, right: number): Promise<void> => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      
      let i = 0, j = 0, k = left;

      while (i < leftArr.length && j < rightArr.length) {
        if (!isSortingRef.current) return;
        
        setComparingIndices([left + i, mid + 1 + j]);
        await sleep(101 - speed);

        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        setArray([...arr]);
        k++;
      }

      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        setArray([...arr]);
        i++;
        k++;
      }

      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        setArray([...arr]);
        j++;
        k++;
      }
    };

    const mergeSortHelper = async (left: number, right: number): Promise<void> => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(left, mid);
        await mergeSortHelper(mid + 1, right);
        await merge(left, mid, right);
      }
    };

    await mergeSortHelper(0, arr.length - 1);
    setSortedIndices([...Array(arr.length).keys()]);
    setComparingIndices([]);
  };

  const handleStart = async (): Promise<void> => {
    if (sorting) {
      setSorting(false);
      isSortingRef.current = false;
      return;
    }

    setSorting(true);
    isSortingRef.current = true;
    setComparingIndices([]);
    setSortedIndices([]);

    switch (sortingMethod) {
      case 'bubble':
        await bubbleSort();
        break;
      case 'selection':
        await selectionSort();
        break;
      case 'insertion':
        await insertionSort();
        break;
      case 'quick':
        await quickSort();
        break;
      case 'merge':
        await mergeSort();
        break;
      default:
        await bubbleSort();
    }

    setSorting(false);
    isSortingRef.current = false;
  };

  const handleReset = (): void => {
    if (sorting) {
      setSorting(false);
      isSortingRef.current = false;
      setTimeout(generateRandomArray, 100);
    } else {
      generateRandomArray();
    }
  };

  const handleArraySizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    if (value >= 5 && value <= 100) {
      setArraySize(value);
    }
  };

  useEffect(() => {
    if (!sorting) {
      generateRandomArray();
    }
  }, [arraySize]);

  const getBarColor = (index: number): string => {
    if (sortedIndices.includes(index)) {
      return 'bg-green-500';
    }
    if (comparingIndices.includes(index)) {
      return 'bg-red-500';
    }
    return 'bg-blue-500';
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Side Panel */}
      <div className="w-80 bg-gray-800 p-6! shadow-2xl overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8! text-center bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Sorting Visualizer
        </h1>

        {/* Array Size Input */}
        <div className="mb-6!">
          <label className="block text-sm font-semibold mb-2! text-gray-300">
            Number of Bars: {arraySize}
          </label>
          <input
            type="range"
            min="5"
            max="100"
            value={arraySize}
            onChange={handleArraySizeChange}
            disabled={sorting}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1!">
            <span>5</span>
            <span>100</span>
          </div>
        </div>

        {/* Bar Gap Control */}
        <div className="mb-6!">
          <label className="block text-sm font-semibold mb-2! text-gray-300">
            Bar Gap: {barGap}px
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={barGap}
            onChange={(e) => setBarGap(parseInt(e.target.value))}
            disabled={sorting}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1!">
            <span>0px</span>
            <span>10px</span>
          </div>
        </div>

        {/* Speed Control */}
        <div className="mb-6!">
          <label className="block text-sm font-semibold mb-2! text-gray-300">
            Speed: {speed}%
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            disabled={sorting}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1!">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="space-y-3! mb-6!">
          <button
            onClick={handleReset}
            className="w-full py-3! px-4! bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            disabled={sorting}
          >
            Reset Array
          </button>
          <button
            onClick={handleStart}
            className={`w-full py-3! px-4! rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              sorting
                ? 'bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                : 'bg-linear-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'
            }`}
          >
            {sorting ? 'Stop' : 'Start Sorting'}
          </button>
        </div>

        {/* Sorting Method Dropdown */}
        <div className="mb-6!">
          <label className="block text-sm font-semibold mb-2! text-gray-300">
            Sorting Algorithm
          </label>
          <select
            value={sortingMethod}
            onChange={(e) => setSortingMethod(e.target.value as SortingMethod)}
            disabled={sorting}
            className="w-full py-3! px-4! bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
        </div>

        {/* Algorithm Information */}
        <div className="bg-gray-700 rounded-lg p-4! mt-6!">
          <h3 className="font-semibold mb-2! text-blue-400">Algorithm Info</h3>
          <div className="text-sm text-gray-300 space-y-1!">
            {sortingMethod === 'bubble' && (
              <>
                <p><strong>Time Complexity:</strong></p>
                <p>Best: O(n) | Avg: O(n²) | Worst: O(n²)</p>
                <p className="mt-2!"><strong>Space:</strong> O(1)</p>
              </>
            )}
            {sortingMethod === 'selection' && (
              <>
                <p><strong>Time Complexity:</strong></p>
                <p>Best: O(n²) | Avg: O(n²) | Worst: O(n²)</p>
                <p className="mt-2!"><strong>Space:</strong> O(1)</p>
              </>
            )}
            {sortingMethod === 'insertion' && (
              <>
                <p><strong>Time Complexity:</strong></p>
                <p>Best: O(n) | Avg: O(n²) | Worst: O(n²)</p>
                <p className="mt-2!"><strong>Space:</strong> O(1)</p>
              </>
            )}
            {sortingMethod === 'quick' && (
              <>
                <p><strong>Time Complexity:</strong></p>
                <p>Best: O(n log n) | Avg: O(n log n) | Worst: O(n²)</p>
                <p className="mt-2!"><strong>Space:</strong> O(log n)</p>
              </>
            )}
            {sortingMethod === 'merge' && (
              <>
                <p><strong>Time Complexity:</strong></p>
                <p>Best: O(n log n) | Avg: O(n log n) | Worst: O(n log n)</p>
                <p className="mt-2!"><strong>Space:</strong> O(n)</p>
              </>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6! space-y-2!">
          <h3 className="font-semibold mb-2! text-gray-300">Legend</h3>
          <div className="flex items-center space-x-2!">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-400">Unsorted</span>
          </div>
          <div className="flex items-center space-x-2!">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-400">Comparing</span>
          </div>
          <div className="flex items-center space-x-2!">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-400">Sorted</span>
          </div>
        </div>
      </div>

      {/* Main Screen - Visualization Area */}
      <div className="flex-1 flex items-end justify-center p-8! bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="flex items-end justify-center h-full w-full"
          style={{ gap: `${barGap}px` }}
        >
          {array.map((value, index) => (
            <div
              key={index}
              className={`transition-all duration-200 rounded-t-sm ${getBarColor(index)}`}
              style={{
                height: `${(value / 320) * 100}%`,
                width: `${Math.max((100 / array.length) - ((barGap * array.length) / 100), 2)}%`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;