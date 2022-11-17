export const setNotification = (message, timeout) => {
	return dispatch => {
		dispatch(createNotification(message));
		setTimeout(() => dispatch(removeNotification()), timeout * 1000)
	}
}

const toMax = (max, value) => Math.max(max, value);
[1,2,3,4].reduce(toMax);

// higher order functions vs loops
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let primes = [];

for (i in array) {
	if (i == 1) primes.push(i);
	else if (i > 1) {
		for (let j = 2; i < j; j++) {
			if (i % j == 0)
				primes.push(i)
		}
	}
}


// DB example
// db connection
export const dbPromise = async () => open({
	filename: 'books.db',
	driver: sqlite3.Database
});

// Runs sql according to paramaters specified in the service
const queryRun = async (sql: string, params: SqlParams) => {
	const promise = await dbPromise();
	return await promise.run(sql, params);
};

// API facing module that serves the queries and parameters spcified by the developers
const create = async (book: SqlParams) => {
	const sql = `insert into books(title,author,year,publisher,description) values (?,?,?,?,?)`;
	return await db.queryRun(sql, book);
};

// Contrast with searchAll...
const searchAll = async (search: SqlParams) => {
	// View with an empty stomach...
	const sql = buildSearchQuery(search);
	return await db.queryAll(sql, search);
};

// A good example of what functional programming tries to avoid
// Prime example of imperative programming with added spicy bad practices
export const buildSearchQuery = (search: SqlParams) => {
	//...
	let sql = `select * from books where `;
	let first = true;
	if (search[0]) {
		sql = sql.concat(`author = ? `);
		first = false;
	}
	if (search[1]) {
		if (first) {
			sql = sql.concat(`year = ? `);
			first = false;
		}
		else sql = sql.concat(`and year = ?`);
	}
	if (search[2]) {
		if (first)
			sql = sql.concat(`publisher = ? `);
		else sql = sql.concat(`and publisher = ?`);
	}

	return sql;
};
