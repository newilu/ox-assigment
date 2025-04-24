import { Request, Response } from "express";
import { Employee } from "../models/Employee";

export const getUsers = async (req: Request, res: Response) => {
  try {
    let query = {};
    if (req.query.status) {
      query = { ...query, status: req.query.status };
    }
    if (req.query.search) {
      const searchTerm = req.query.search.toString().toLowerCase();
      query = { ...query, name: { $regex: searchTerm, $options: "i" } };
    }
    const employees = await Employee.find(query);
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employees" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const count = await Employee.count();
    const newEmployee = new Employee({
      id: count + 1,
      name: req.body.name,
      status: req.body.status || "Working",
      img: req.body.img || `https://picsum.photos/id/${count + 1}/200/300`,
    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error creating employee" });
  }
};

export const updateUserStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const employee = await Employee.findOne({ id: +id });
    if (employee) {
      employee.status = status;
      await employee.save();
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating employee status" });
  }
};
