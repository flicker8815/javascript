let num = prompt('Input a num', 0);
let prime = new Array(num + 1);
prime[0] = prime[1] = true;
for(let i = 2; i < +num + 1; i++) {
	if(!prime[i]) 
		for(let j = i * i; j < num + 1; j += i) 
			prime[j] = true;
}

for(let i = 2; i < +num + 1; i++) 
	if(!prime[i])
		alert(i);

