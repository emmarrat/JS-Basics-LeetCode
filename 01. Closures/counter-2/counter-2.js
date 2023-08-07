//Link: https://leetcode.com/problems/counter-ii/submissions/?envType=study-plan-v2&envId=30-days-of-javascript
const createCounter = (init) => {
    let number = init
    return {
        counter: init,
        increment: () => {
            return number += 1;
        },
        decrement: () => {
            return number -= 1;
        },
        reset: () => {
            return number = init;
        },
    }

};