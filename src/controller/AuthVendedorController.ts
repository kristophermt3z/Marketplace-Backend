import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { vendedores } from "../entity/vendedor";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const createVendedor = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(404).send("All fields are required (email and password).");
    return;
  }
  const vendedorRepository = AppDataSource.getRepository(vendedores);

  const existingVendedor = await vendedorRepository.findOneBy({ email });
  if (existingVendedor) {
    res.status(404).send("A seller with this email already exists.");
    return;
  }

  try {
    const vendedor = new vendedores();
    vendedor.email = email;
    vendedor.password = await bcryptjs.hash(password, 10);
    vendedor.role = "vendedor";

    await vendedorRepository.save(vendedor);
    res.status(201).send("Seller created successfully.");
  } catch (error) {
    console.error("Error creating seller:", error);
    res.status(500).send("Internal server error.");
  }
};

export const loginVendedor = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(404).send("Both email and password are required.");
    return;
  }

  const vendedorRepository = AppDataSource.getRepository(vendedores);
  const vendedor = await vendedorRepository.findOneBy({ email });

  if (!vendedor) {
    res.status(404).send("User not found.");
    return;
  }

  const isPasswordValid = await bcryptjs.compare(password, vendedor.password);

  if (!isPasswordValid) {
    res.status(404).send("Incorrect password.");
    return;
  }

  const token = jwt.sign(
    { id: vendedor.id, role: vendedor.role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  res.json({ message: "Login successful", token, role: vendedor.role });
};
