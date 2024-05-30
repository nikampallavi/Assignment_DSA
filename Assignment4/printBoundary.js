
function printBoundary(a, m, n)
{
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (i == 0)
				console.log(a[i][j] + '\xa0');
			else if (i == m - 1)
				console.log(a[i][j] + '\xa0');
			else if (j == 0)
				console.log(a[i][j] + '\xa0');
			else if (j == n - 1)
				console.log(a[i][j] + '\xa0');
			else
            console.log("\xa0\xa0\xa0");
		}
		console.log("\xa0");
	}
}

var a = [ [ 1, 2, 3,  ],
			[ 5, 6, 7,  ],
			[ 1, 2, 3, ]];
printBoundary(a, 3, 3);



