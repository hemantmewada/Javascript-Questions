function memoize(fn) {
    const cache = new Map();  // Create a cache to store results
    return function(...args) {
        const key = JSON.stringify(args);  // Convert the arguments to a string key for cache
        if (cache.has(key)) {
            return cache.get(key);  // Return cached result if it exists
        }
        const result = fn(...args);  // Call the original function
        cache.set(key, result);  // Cache the result
        return result;
    };
}
// Example usage:
function slowFunction(num) {
    console.log('Computing...');
    return num * 2;  // Just an example slow function
}
const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5));  // Outputs: Computing... 10
console.log("----------------------");
console.log(memoizedFunction(10));
console.log("----------------------");
console.log(memoizedFunction(5));  // Outputs: 10 (retrieved from cache, no Computing... log)
console.log("----------------------");
console.log(memoizedFunction(10)); // Outputs: Computing... 20
