
//Link: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
const createCounter = (n) => {
    return function() {
        return n++;
    };
};

