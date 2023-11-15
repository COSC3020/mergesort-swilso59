function mergesort(array) {
    // Get the length of the input array.
    const n = array.length;
    // Start loop for subarrays 
    for (let subArrSize =  1; subSize < n; subSize *= 2){
        for (let leftStartIndex = 0; leftStartIndex < n; leftStartIndex += 2 * subArrSize){
            const mid = Math.min(leftStartIndex + subArrSize - 1, n - 1);
            const rightEndIndex = Math.min(leftStartIndex + 2 * subArrSize - 1, n - 1);
            merge(array, leftStartIndex, mid, rightEndIndex);
        }
    }
    function merge(array, left, mid, right){
        let i = left;
        let j = mid +1;

        while(i <= mid && j <= right){

            if (array[i] <= array[j]){
                i++;
            }
            else{
                const temp = array[j];
                let k = j;
                while (k !== i){
                    array[k] = array[k - 1];
                    k--;
                }
                array[i] = temp;
                i++;
                mid++;
                j++;
            }
        }
    }
    return array;
}
