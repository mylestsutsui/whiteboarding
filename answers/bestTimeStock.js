// "Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0."				

// input: array
// output: number

// price [ 7, 1, 5, 3, 6, 4]
// time    1  2  3  4  5  6

// when the next element is less than the current one, we can't sell
// keep track of the lowest price sotck, also the highest price stock

const maximumProfit = (stock) => {
    // create variable to store max profit
    // create variable to store min stock price
    // create a for loop to iterate through the array
        // calculate the profit between min price and sell price (current price)
        // find the maxmium between the profit and the max profit
    // return max profit

    let maxProfit = 0;
    let minStockPrice = stock[0]

    for (let i = 1; i < stock.length; i += 1) {
        let tempProfit = stock[i] - minStockPrice;
        if (stock[i] < minStockPrice) minStockPrice = stock[i]
        // console.log(tempProfit)
        maxProfit = Math.max(maxProfit, tempProfit)
    }

    return maxProfit;
}

// console.log(maximumProfit([7,6,4,3,1]))