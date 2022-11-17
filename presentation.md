---
title: Funktionaalinen ohjelmointi
author: Tommi Tahvanainen
extensions:
  - image_ueberzug
styles:
  style: gruvbox-dark
---

# Sisältö
1. Johdanto
2. Käyttötarkoituksia
3. Risuja ja ruusuja
4. Määritelmiä
5. Webohjelmointi ja esimerkit
6. C# ja LINQ

# Mitä?
## Ohjelmointi **paradigma**
- Miten ohjelmia kootaan/rakennetaan syntaktisella ja rakenteellisella tasolla.

> Object oriented programming makes code understandable by encapsulating moving parts. Functional programming makes code understandable by minimizing moving parts. *- Michael Feathers*

## **Deklaratiivisuus**
- Deklaratiivinen: Kuvaus lopputuloksesta
- Imperatiivinen: Kuvaus vaiheista

# Missä?

## Tiede ja tutkimus
- Algoritmit
- Matemaatikot sekä tietojenkäsittelytieteilijät

## Kaupalliset tuotteet ja palvelut
- Webohjelmoinnin "service"-komponentit
- Tilaton ohjelmointi

# Miksi?
- Korrektius
- Testattavuus

# ...Mutta!
- Resurssien käytön tehottomuus ajoittain
- Pelit: tilakone

# Konsepteja ja sääntöjä

1. "Immutability" tai koskemattomuus
2. "First Class" funktiot
3. Tilaton
4. *EI* sivuvaikutuksia
5. Jokaiselle x, f(x) on sama

==> Puhtaat funktiot

# "MadMaths" esimerkki
```ts
const toMax = (max, value) => Math.max(max, value);
[1,2,3,4].reduce(toMax);
```

# Tietokantaesimerkki
```ts
export const dbPromise = async () => open({
    filename: 'books.db',
    driver: sqlite3.Database
});
```

```ts
const queryRun = async (sql: string, params: SqlParams) => {
    const promise = await dbPromise();
    return await promise.run(sql, params);
};
```

```ts
const create = async (book: SqlParams) => {
    const sql = 'insert into books(title,author,year,publisher,description) values (?,?,?,?,?)';
    return await db.queryRun(sql, book);
};
```

```ts
const searchAll = async (search: SqlParams) => {
    // View with an empty stomach...
    const sql = buildSearchQuery(search);
    return await db.queryAll(sql, search);
};
```

# Tietokantaesimerkki
```ts
// A good example of what functional programming tries to avoid
// Prime example of imperative programming with added spicy bad practices
export const buildSearchQuery = (search: SqlParams) => {
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
```

# Proseduraalinen vs funktionaalinen alkuluku
```ts
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let primes = [];
let flag = true;

for (integer in array) {
    flag = true;
    if (integer == 0 || integer == 1) flag = false;
    else if (integer > 1) {
        for (let i = 2; i <= integer / 2; ++i) {
            if (integer % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) primes.push(integer);
}

console.log(`All the numbers: ${array}`);
// output: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
console.log(`All the primes: ${primes}`);
// output: 2,3,5,7,11,13,17
```

# Proseduraalinen vs funktionaalinen alkuluku
```ts
// higher order functions:
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const isPrime = n =>
    n <= 1
        ? false
        : !Array.from(new Array(n), (el, i) => i + 1)
            .filter(x => x > 1 && x < n)
            .find(x => n % x === 0);

const primes = array.filter(isPrime);

console.log(`All the numbers: ${array}`);
// output: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
console.log(`All the primes: ${primes}`);
// output: 2,3,5,7,11,13,17
```

# C# ja LINQ
## LINQ = Language Integrated Query
- Osa C# standardia, käytetään erilaisten datalähteiden ja formaattien hakuihin.

```cs
public List<ItemProperty> listItem = new List<ItemProperty>();
//...
//...
var theData = (
    from data in listItem
    where data.itemType.Equals(itemTypeList.captionText.text)
    select data
    ).ToList();
```



