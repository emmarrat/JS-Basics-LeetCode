// Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
const map = function(arr, fn) {
    let result=[];
    for(let i =0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
};