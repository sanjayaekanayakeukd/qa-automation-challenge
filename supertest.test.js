const request = require('supertest');
const app = require('./server'); // Adjust this based on how your app is exported

describe('API Tests', () => {
  it('Login should succeed with correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'password' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Login successful');
  });
});
