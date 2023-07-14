// Question: //
// Given two numbers m and a with goal states of (goal_m, goal_a); return number of iterations it takes for (1,1) to reach the goal states

// Assumptions: //
// - a & m are positive numbers

// Solution: //
// Backward approach: Subtract smaller value from the larger value
// Not Possible:
// - if two numbers are equal
// - if smaller divides larger ie divisible  [bc they'll become equal at some point] [ efficient for some cases: returns early]


function isPossible(value_m,value_a){
    let counter = 0
    let m = value_m
    let a = value_a
    while (m != 1 || a != 1){
        maximum = Math.max(m,a)
        minimum = Math.min(m,a)

        if ((m != 1 && a != 1 &&  maximum % minimum == 0) || (m == a || a <= 0 || m <= 0)){
            return 'Not Possible'    
        }
        else if (m > a){
            m = m - a
        }
        else if (m < a){
            a = a - m 
        }

        counter += 1
    }

    return `Number of iterations: ${counter}`
}


input_m = 7
input_a = 2
result = isPossible(input_m,input_a) 
console.log(result)




