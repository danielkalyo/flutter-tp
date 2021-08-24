import express from "express";
import database from "./database";
import { deleteStudent, getOneStudent, getStudents, loginStudent, postStudents, updateStudent } from "./etudiant.ctrl";
const router = express.Router();

const app = express();

const testConnection = () => {
    try {
      database.authenticate();
      console.log("Connection oK");
    } catch (error) {
      console.log(error);
    }
  };
  
testConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========
// all routes
app.use('/students', router.get('/all', getStudents));
app.use('/students', router.get('/one/:id', getOneStudent));
app.use('/students', router.put('/update/:id', updateStudent));
app.use('/students', router.delete('/delete/:id', deleteStudent));
app.use('/students', router.post('/create', postStudents));
app.use("/students", router.post("/login", loginStudent));

const port = 3535;
app.listen(port, () => console.log(`The server is app on port ${port}`));
