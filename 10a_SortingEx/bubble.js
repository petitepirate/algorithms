function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swap;
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let holder = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = holder;
				swap = true;
			}
		}

		if (!swap) break;
	}

	return arr;
}

module.exports = bubbleSort;
