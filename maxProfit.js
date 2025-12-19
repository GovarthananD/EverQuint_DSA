function maxProfit(n) {
  let maxProfit = 0;
  let bestT = 0, bestP = 0, bestC = 0;


  for (let t = 0; t * 5 <= n; t++) {
    let remainingAfterT = n - (t * 5);


    for (let p = 0; p * 4 <= remainingAfterT; p++) {
      let remainingAfterP = remainingAfterT - (p * 4);

     
      let c = Math.floor(remainingAfterP / 10);

      let profit =
        (t * 1500) +
        (p * 1000) +
        (c * 2000);

  
      if (profit > maxProfit) {
        maxProfit = profit;
        bestT = t;
        bestP = p;
        bestC = c;
      }
    }
  }

  console.log("Earnings: $" + maxProfit);
  console.log(`T: ${bestT} P: ${bestP} C: ${bestC}`);
}



maxProfit(7);
maxProfit(8);
maxProfit(13);
