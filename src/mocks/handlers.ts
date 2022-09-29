import { rest } from 'msw';
import { mockFoods } from './mockFoods'

export const handlers = [
  rest.get('http://localhost:3001/foods', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockFoods)
    )
  })
];
