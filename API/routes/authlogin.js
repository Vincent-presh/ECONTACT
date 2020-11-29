var express = require("express");
var router = express.Router();
const connection = require("./dbService");
/* GET users listing. */
async function findProfile(email, password) {
  try {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT id FROM profiles WHERE email=? AND password=?";
      connection.query(query, [email, password], (err, result) => {
        if (err) reject(new Error(err.message));
        resolve(result);
      });
    });
    //const encryp = encryption.getServiceInstance();
    return {
      id: response,
      logged_in: true,
    };
  } catch (error) {
    console.log(error);
  }
}
router.post("/", function (req, res) {
  const { email, password } = req.body.user;
  const result = findProfile(email, password);
  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

module.exports = router;
