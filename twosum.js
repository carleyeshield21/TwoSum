// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
    // We output the elements manually using the direct indices to see the relationship for our for, while, and if conditions
    // console.log(numbers[0], numbers[1])
    // console.log(numbers[0], numbers[2])
    // console.log('========')
    // console.log(numbers[1], numbers[2])
    // console.log(numbers[1], numbers[3])
    // console.log('========')

    for(i=0; i<=numbers.length-2; i++){
        let j = i + 1
        while(j<=numbers.length-1){
            // console.log(i,j)
            let sum = numbers[i] + numbers[j]
            // console.log(sum)

            if(sum == target){
                console.log(`${numbers[i]} + ${numbers[j]} = ${sum}`)
                console.log('The indices are:')
                console.log(i, j)
            }

            j++
        }
        // console.log('========')
    }
}
twoSum([1,2,3,4], 4)
console.log('========')
twoSum([1234,5678,9012], 14690)
console.log('========')
twoSum([2,2,3], 4)