import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

let app = express();
app.use(cors());
app.use(express.json());

let db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "oxytocin",
});
console.log("MySQL Connected Successfully.");

// ! Fetch the data of all users. (Case-01)
app.get("/student", async (req, res) => {
  try {
    let [rows] = await db.execute(`
      SELECT * FROM student LEFT JOIN result ON student.id = result.id
      `);

    let data = rows.map((row) => {
      // prettier-ignore
      let {id, registration, session, name, image, dob, bloodGroup, phone, email, fbUserName, tgUserName, district, ...grades} = row;

      // ! Defines the serial of API.
      // prettier-ignore
      return { id, registration, session, name, image, dob, bloodGroup, phone, email, fbUserName, tgUserName, district, result: grades,};
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});
// ! Fetch the data single use. (Case-02)
app.get("/student/:id", async (req, res) => {
  let { id } = req.params;
  console.log("Fetching student with ID:", id);

  try {
    // prettier-ignore
    let [rows] = await db.execute(`
      SELECT * FROM student LEFT JOIN result ON student.id = result.id 
      WHERE student.id = ?`, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "student not found" });
    }

    let row = rows[0];
    // prettier-ignore
    let { registration, session, name, image, dob, bloodGroup, phone, email, fbUserName, tgUserName, district, ...grades} = row;
    // prettier-ignore
    let formatted = {id: parseInt(id), registration, session, name, image, dob, bloodGroup, phone, email, fbUserName, tgUserName, district, result: grades,};

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// ! This part is mandatory for both case.
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
