var express = require("express");
var router = express.Router();
const connection = require("./dbService");
const encryption = require("./encrypt");
/* GET users listing. */

async function insertNewProfile(name, email, password, segment) {
  try {
    const response = await new Promise((resolve, reject) => {
      const query =
        "INSERT INTO profiles (name, email, password, segment_id) VALUES (?,?,?,?)";
      connection.query(
        query,
        [name, email, password, segment],
        (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId);
        }
      );
    });
    //const encryp = encryption.getServiceInstance();
    return {
      id: response,
      logged_in: true,
      name: name,
    };
  } catch (error) {
    console.log(error);
  }
}

router.post("/", function (req, res) {
  console.log(req.body);
  const { name, email, phone, password, segment } = req.body.user;
  /*const encryp = encryption.getServiceInstance();
    password =  encryp.encode(JSON.stringify({'password': password}));
    */

  const result = insertNewProfile(name, email, password, segment);
  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

module.exports = router;
