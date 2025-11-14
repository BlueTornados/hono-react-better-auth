import { Hono } from 'hono'

const app = new Hono()

const router = app.get('/', (c) => {
  return c.text('Hello Hono!')
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
