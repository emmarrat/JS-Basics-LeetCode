//Link: https://leetcode.com/problems/to-be-or-not-to-be/solutions/3566159/simple-compare/?envType=study-plan-v2&envId=30-days-of-javascript


const expect = (val) => {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};
