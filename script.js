const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
	let s = 0, e = 0, sum = 0;

	while (e < arr.length) {
		sum += arr[e];

		if(sum === n){
			let subarr = arr.slice(s, e+1);
			ans.push(subarr);
			s = e+1;
			sum = 0;
		}
		else if(sum > n){
			let subarr = arr.slice(s, e);
			ans.push(subarr);
			s = e;
			sum = arr[e];
		}
		if(sum <= n && e === arr.length - 1)
		{
			let subarr = arr.slice(s, e+1);
			ans.push(subarr);	
		}
		e++;
	}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
