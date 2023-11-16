[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12685379&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

I think that the outer loop runs $\log_2(n)$. I think this is the case because it divides the array by 2 into smaller peices until it reaches individual elements. 

For each iteration of the outer loop the inner loop goes through all pairs of adjacent subarrays and the number of comparisions and element. This seems like it is related to the size of the input array. 

The merge function combines two sorted subarrays into a larger sorted array. Which also seems like it would be proportional to the size of the input subarrays.

I think for the worst case. The array is arranged in a particular order (reverse?) which causes more difficulty in the sorting process and requiring more merge steps. 

$\Theta \left(n\log_2(n)\right) $


