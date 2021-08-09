import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the image endpoint', async (done) => {
    const response = await request.get('/image');
    expect(response.status).toBe(200);
    done();
  }
  )
});