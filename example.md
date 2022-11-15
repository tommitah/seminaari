---
title: This is a test
author: Tommi Tahvanainen
extensions:
  - image_ueberzug
styles:
  style: gruvbox-dark
---

# Test heading
![30](/home/tommitah/development/seminaari/img/wallhaven-5713k8_2560x1440.png)
Second test heading

# Code test
`const state = array.map(element => typeof element === 'number')`
> const state = array.map(element => typeof element === 'number')

```file
path: functions.ts
lang: typescript
```

```python
def hello(arg1):
    print(f"Hello World!", {arg1})
```

```typescript
export const checkDuplicates = (allBooks: Array<Book>, req: RequestBody<Book>) => {
    return allBooks.filter(book => (book.title === req.body.title &&
        book.author === req.body.author &&
        book.year === req.body.year)
    );
};
```
