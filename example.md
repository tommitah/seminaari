---
title: This is a test
author: Tommi Tahvanainen
extensions:
  - image_ueberzug
styles:
  style: gruvbox-dark
---

# Test heading
![30](/home/tommitah/development/seminaari/img/testimage.png)
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

```python
export const checkDuplicates = (allBooks: Array<Book>, req: RequestBody<Book>) => {
    return allBooks.filter(book => (book.title === req.body.title &&
        book.author === req.body.author &&
        book.year === req.body.year)
    );
};
```


# Callbackit
![30](/home/tommitah/development/seminaari/img/callback.png)
