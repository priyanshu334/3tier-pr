const pool = require("../config/db");

const getMessages = async (req, res) => {
  const result = await pool.query(`SELECT * FROM messages`);
  res.status(200).json(result.rows);
};

module.exports = { getMessages };
