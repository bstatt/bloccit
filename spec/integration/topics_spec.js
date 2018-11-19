const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/topics/";
const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;


describe("routes : topics", () => {

  // beforeEach((done) => {
  //   this.topic;
  //   sequelize.sync({force: true}).then((res) => {
  //
  //    Topic.create({
  //      title: "JS Frameworks",
  //      description: "There is a lot of them"
  //    })
  //     .then((topic) => {
  //       this.topic = topic;
  //       done();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       done();
  //     });
  //   });
  // });

  describe("GET /topics", () => {

    it("should return a status code 200", (done) => {
      console.log("Starting request...");
      request.get(base, (err, res, body) => {
        console.log("Request finished");
        expect(res.statusCode).toBe(200);
        done();
      });
  });
   });
  });
