const app = require("../../app");
const db = require("../../services/db");
const request = require("supertest");

describe("Products API", () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(async () => {
        await db.disconnect();
    })
    test('test GET /products', async () => {
        console.log('hello');
    });
});