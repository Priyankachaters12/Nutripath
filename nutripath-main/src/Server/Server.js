
import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';

const app = express();
const PORT = 8090;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const con = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@khushi11',
    database: 'diet'
});

// Connect to MySQL
con.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err.message);
        return;
    }

    console.log("Connected to MySQL database");
});

// ==================== REGISTER ====================

app.get('/Reg', (req, res) => {

    const { id, name, mobile, password } = req.query;

    // Check whether all fields are provided
    if (!id || !name || !mobile || !password) {
        return res.json("All fields are required");
    }

    const sql = `
        INSERT INTO reg (id, name, mobile, password)
        VALUES (?, ?, ?, ?)
    `;

    con.query(
        sql,
        [id, name, mobile, password],
        (err, result) => {

            if (err) {

                // Duplicate primary key
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.json("ID already exists");
                }

                console.log("Registration error:", err.message);
                return res.status(500).json("Database error");
            }

            console.log("New user registered:", id);
            res.json("Saved");
        }
    );
});

// ==================== LOGIN ====================

app.get('/Login', (req, res) => {

    const { id, password } = req.query;

    if (!id || !password) {
        return res.json("Enter ID and password");
    }

    const sql = `
        SELECT * FROM reg
        WHERE id = ? AND password = ?
    `;

    con.query(
        sql,
        [id, password],
        (err, result) => {

            if (err) {
                console.log("Login error:", err.message);
                return res.status(500).json("Database error");
            }

            if (result.length === 0) {
                return res.json("Invalid");
            }

            res.json("Valid");
        }
    );
});


app.listen(PORT, () => {
    console.log(`The server is running properly on ${PORT}`);
});
