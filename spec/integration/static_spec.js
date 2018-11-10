const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = "http://localhost:3000/marco";

describe("routes : static", () => {
  describe("GET /", () => {
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", () => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");
      });
    });

  });

  describe("GET /marco", () => {
    it("should return status code 200", (done) => {
      request.get(marco, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("polo");
        done();
      });
    });
  });

});
