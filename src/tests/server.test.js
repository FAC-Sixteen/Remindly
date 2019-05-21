const request = require('supertest');

const app = require('../app');


describe('jest is working', () => {
  it('should be showing James', () => {
      expect('James').toBe('James');
  });
});

describe('testing home route status code', () => {
  test('It should respond with status code 200', (done) => {
      return   request(app).get('/').then((response) => {
             expect(response.statusCode).toBe(200);
             
         });
     });
});

describe('testing home route content type', () => {
  test('It should respond with content type text', (done) => {
        return request(app).get('/').then((response) => {
             expect(response.header["content-type"]).toBe("text/html; charset=utf-8");
             
         });
     });
});

describe('testing nonexistent endpoint route status code', () => {
  test('It should respond with status code 404', (done) => {
        return request(app).get('/asdgsgsdg').then((response) => {
             expect(response.statusCode).toBe(404);
           
         });
     });
});
