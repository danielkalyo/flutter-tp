import Etudiant from "./etudiant.mdl";

export const getStudents = async (req, res) => {
  try {
    const response = await Etudiant.findAll();
    response &&
      res.status(200).json({
        message: "Students getted successfully",
        students: response,
      });
  } catch (error) {
    console.log(error);
  }
};

export const getOneStudent = async (req, res) => {
  try {
    const response = await Etudiant.findOne({ where: { id: req.params.id } });
    response &&
      res.status(200).json({
        message: "Student getted successfully",
        students: response,
      });
  } catch (error) {
    console.log(error);
  }
};

export const postStudents = async (req, res) => {
  try {
    const response = await Etudiant.create({ ...req.body });

    if (!response) {
      res.status(400).json({
        message: "something went wrong",
      });
    }

    return res.status(201).json({
      response: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const response = await Etudiant.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );
    response &&
      res.status(200).json({
        message: "Student updated successfully",
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const response = await Etudiant.destroy({ where: { id: req.params.id } });
    if (response) {
      return res.status(200).json({
        message: "Student deleted successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginStudent = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await Etudiant.findOne({ where: { username, password } });
    if (!response) {
      return res.status(401).json({
        message: "Login failed",
      });
    }

    return res.status(200).json({
      message: "Login success",
      students: response,
    });
  } catch (error) {
    console.log(error);
  }
};
