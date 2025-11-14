import { Hono } from 'hono'
import { getTodos } from './db/queries';

const app = new Hono()

const router = app.get('/api/todos', async (c) => {
  try {
    const todos = await getTodos();
    return c.json(todos);
  }
  catch(error) {
    console.error('failed to fetch todos: ', error);
    return c.json({error: 'Failed to fetch todos'}, 500);
  }
})
  .get('/api/people', (c) => {
    return c.json([
        { id: 1, name: 'Alice server' },
        { id: 2, name: 'Bob server' },
        { id: 3, name: 'Charlie server' },
      ]);
  });

export type AppType = typeof router;
export default app;
