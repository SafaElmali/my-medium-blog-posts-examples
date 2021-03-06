<div align="center"> 

# Simple REST API App With Deno 🦖
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)<br>

<i>This repo contains demo codes for my Medium article 👉  <a href="https://medium.com/kodcular/deno-i%CC%87le-mini-rest-api-uygulamas%C4%B1-nas%C4%B1l-yaz%C4%B1l%C4%B1r-1a7116b411b6">Medium Article</a></i>

</div>

## How To Start ?

Run the ```index.ts``` file with ```deno run --allow-net index.ts``` and start to send some requests using Postman or kind of platform! Hopefully it will work!

## Built with:

- [Typescript](https://www.typescriptlang.org/)
- [Deno 🦖](https://deno.land/)(A secure runtime for JavaScript and TypeScript)
- [oak](https://github.com/oakserver/oak)(A middleware framework for Deno's net serve)

## Defined Routes

- All of the routes related to todos are now in the routes.js module under the routes directory.

```ts
import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTodoItem, getTodos, saveTodo, updateTodoItem, deleteTodoItem } from "../controllers/todos.ts";

const router = new Router();

router
    .get("/todo", getTodos)
    .get("/todo/:id", getTodoItem)
    .post("/todo", saveTodo)
    .put("/todo/:id", updateTodoItem)
    .delete("/todo/:id", deleteTodoItem);

export default router;
```

## Controllers

The event handlers of routes are commonly referred to as controllers, and for this reason I have created a new controllers directory and put all controllers inside

```ts
import Todo from "../model/todo.ts";
....

export const getTodoItem = (context: any) => {
    const selectedId = context.params.id;
    const selectedTodo = TodoList.find((item) => selectedId == item.id);

    if (selectedTodo) {
        context.response.body = selectedTodo;
    } else {
        context.response.status = 404;
        context.response.body = { message: `There is no such todo item.` }
    }
}

export const saveTodo = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    const todo: Todo = body.value;
    TodoList.push(todo);
    response.status = 200;
    response.body = { message: 'Todo item saved successfully!' }
}

....

````

## TODO

- [ ] Add UI

## License

deno-simple-rest-api-app is [MIT licensed](./LICENSE).
