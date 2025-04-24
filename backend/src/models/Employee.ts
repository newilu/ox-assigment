import { Schema, model, Document } from "mongoose";

export interface IEmployee extends Document {
  id: number;
  name: string;
  status: "Working" | "OnVacation" | "LunchTime" | "BusinessTrip";
  img: string;
}

const EmployeeSchema = new Schema<IEmployee>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["Working", "OnVacation", "LunchTime", "BusinessTrip"],
    required: true,
  },
  img: { type: String, required: true },
});

export const Employee = model<IEmployee>("Employee", EmployeeSchema);
