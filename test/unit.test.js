const request = require('supertest');
const app = require('../app');

test("GET users", () => {
    return request(app)
        .get('/users')
        .set('Content-Type', 'application/json')
        .expect(200)
        .then(data => {
            expect(data.body.message).not.toBeNull()
        })
});

test("GET /users/learning", () => {
    return request(app)
        .get('/users/learning')
        .set('Content-Type', 'application/json')
        .expect(200)
        .then(data => {
            expect(data.body.message).toBe('Hello student')
        })
})