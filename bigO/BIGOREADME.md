# Data Structures and Algorithms

> This course focuses on tiem complexity mostly, will need to find more resources for space complexity

## Big O

- Tells us how efficient our code is
- A way to mathematically figure out which code runs more efficiently

### Time Complexity

We measure time complexity in the number of operations, not in time

- b/c if we run on a faster computer then code always runs faster so we must look at the number of operations

### Space Complexity

- the amount of memory that something uses

## Three common Characters

- There are three greek letters we consistently see when talking about big O
  Ω - Omega
  Ɵ - Theta
  O - Omicron - The O we see in Big O, get it?

Lets say we have an array [1, 2, 3, 4, 5, 6, 7]

> If we are looking for the best case that is 1 aka Omega Ω
> If we are looking for the worst case that is 7 aka Theta Ɵ
> If we are looking for the average case that is 4 aka Omicron O

- Therefore Big O is always the worst case

## Big O notiation in detail

### Linear Time - O(n) - Proportional

- O(n) is always a stright line
  - the number of operations is always proportional to whatever **n** is.
  - if we pass 10 then it will run 10 times

```
function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
logItems(10)
```

### Quadratic Time - O(n^2) - Loop within a loop

- Quadratic code is generally considered inefficient code, if you can write it in O(n) it is going to be much more efficient
- O(n^2)
  - n \* n = n^2 or O(n^2)
  - if we have two sets of code and one is linear and the other is quadratic, the linear is better b/c it completes the code in fewer operations

```
function logExpoItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
	}

}

logExpoItems(10)
```

### Constant Time - O(1)

- This is THE MOST EFFICIENT Big O. Nothing is more efficient than O(1)

- It doesnt matter if **n** is 1 or **n** is 1000000000 the number of operations is always 1

```
function addItems(n) {
	return n + n;
}

addItems(10);

```

<mark>What if we did n + n + n instead? That becomes O(2), what do we do?
You guessed it we simplify it! We write is as O(1) still b/c the number of operations is always constant</mark>

> See simplification rules below. This is such an easily understood one so I didn't add it to this list

### Logarithm Time - O(log n) - Divide and Conquer

This is very efficient, and almost as efficient as constant time. Its much better than linear or quadratic.

Lets say we have a sorted array: **In order to do the below example you HAVE to have sorted data**
[1, 2, 3, 4, 5, 6, 7, 8]

Now let's say we want to find a number in this array. We'll use one for example. What would be the most efficient way to do this?

- Lets divide the array in half, then in half again, and then once more. - Now we have 1!
  - This could be written as 2^3 = 8 OR in easy terms. _How many times do I have to divide the array to get to 1 item?_
  - This is known as logarithmic time and it is also known as the technique of **divide and conquer**.
    > The logarithmic form \(\log _{b}(x)=y\) can be written in exponential form as \(b^{y}=x\)
    > The logarithmic form \(\log _{2}(8)=3\). can be written in exponential form as \(2^{3}=8\) - the 2 in this log expression represents diving by HALF
    > Basically this is saying. How many times do I have to divide by in half to get to one item? Not literally the integer 1 or the first spot in the array but ONE ITEM.

The beauty of this approach is when you have a bajillion items. With each divide you have many many less items to look at for your number.

## Exponential Time Complexity \( O(2^n) \)

**Definition**: Exponential time complexity describes algorithms where the runtime doubles with each additional input. These algorithms are impractical for large inputs due to their rapid growth.

### Example Problem: Generating All Subsets of a Set

The number of subsets of a set of size \( n \) is \( 2^n \), so generating them takes exponential time.

```
function generateSubsets(arr) {
    const subsets = [];

    function helper(current, index) {
        if (index === arr.length) {
            subsets.push(current);
            return;
        }
        // Include current element
        helper([...current, arr[index]], index + 1);
        // Exclude current element
        helper(current, index + 1);
    }

    helper([], 0);
    return subsets;
}

console.log(generateSubsets([1, 2, 3]));
```

Explanation:
Recursive Calls:

At each element, the algorithm decides whether to include or exclude it, leading to 2^n combinations.
Output for Input [1, 2, 3]: [ [], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3] ]

## Rules of Simplifying Big O notation

Big O has several ways to simplify the notations

**Rule 1**: <u>Drop constants or remove constants</u>

```
function dropConstants(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	for (let j = 0; j < n; j++) {
		console.log(j);
	}
}
dropConstants(3);

```

The code above could be writen or seen as O(2n) b/c it runs n + n times or 2n

- However, it doenst matter if its 2n, 3n, or 100n, we drop the integer aka the constant and it simplifies to O(n)

  - So we always say this code is O(n)

**Rule 2**: <u>Drop non-dominants </u>

```
function dropNonDominants(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
    for (let k = 0; k < n; k++) {
        console.log(k);
    }
}

dropNonDominants(10);

```

- the nested loop runs O(n^2) then non-nested is O(n) this fn adds to O(n^2 + n)
- the single n isnt really adding a large amount to the number of operations meaning if N was 100, the single **n** would be 100 vs n^2 being 10,000. So then we decide to drop the NON DOMINANT **n** and write this as O(n^2)

## Interview Question GOTCHA

### Differnet terms for inputs

```
function dropConstants(a, b) {
	for (let i = 0; i < a; i++) {
		console.log(i);
	}
	for (let j = 0; j < b; j++) {
		console.log(j);
	}
}
```

> The knee jerk reaction is to say the complexity here is O(n) because we usually simplify O(2n) to O(n).
> HOWEVER THAT IS WRONG AND NOT THE CASE HERE.
> A could be 1 and B could be 1000000 so the furthest we can simplify this is O(a + b)
> if this was a nested for loop then it would be O(a \* b) - you cannot use N in either case you have to use DIFFERENT TERMS FOR DIFFERENT INPUTS

## Big O of Arrays

### Adding and Removing

O(N) -> [1, 2, 3, 4] <- O(1)

- If we wanted to add (push) or remove (pop) and item to the end of the array, that is O(1) and super easy!
- Since we dotn have to reindex all the items and just add one or remove one from the end, that is constant time

**HOWEVER**

- if we wanted to add or remove shift/unshift from the beginning of the array (or technically anywhere in the array) we would have to reindex the entire array
- shift/unshift is O(n)
- splice is also O(n)

### Finding

[1, 2, 3, 4] - What is the Big O of finding 3?

Searching by VALUE aka array.find(value => value === 3) is O(n) b/c you search the entire array
Search by INDEX aka array[2] is O(1) b/c it allows you to go directly to that index!

> You may say wellllll what if the number is in the middle of the array? Isnt that O(1/2n) if I use the .find method?
> That would be wrong for two reasons
>
> 1. We DROP CONSTANTS remember? So O(1/2n) is O(n)
> 2. Big O ALWAYS MEASURES THE WORST CASE SCENARIO
