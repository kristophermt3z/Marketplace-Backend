import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { vendedores } from "../entity/vendedor";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const createVendedor = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(400).send("Todos los campos son necesarios (email y password).");
        return;
    }
    console.log('first')
    const vendedorRepository = AppDataSource.getRepository(vendedores);

    const existingVendedor = await vendedorRepository.findOneBy({ email });
    if (existingVendedor) {
        res.status(409).send("Un vendedor con este email ya existe.");
        return;
    }

    try {
        const vendedor = new vendedores();
        vendedor.email = email;
        vendedor.password = await bcryptjs.hash(password, 10);
        vendedor.role = "vendedor";

        await vendedorRepository.save(vendedor);
        res.status(201).send("Vendedor creado exitosamente.");
    } catch (error) {
        console.error("Error al crear el vendedor:", error);
        res.status(500).send("Error interno del servidor.");
    }
};

export const loginVendedor = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log('second')
  
    if (!(email && password)) {
      res.status(400).send("Both email and password are required.");
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
      res.status(401).send("Incorrect password.");
      return;
    }
  
    // Create a token
    const token = jwt.sign({ id: vendedor.id, role: vendedor.role }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
  
    res.json({ message: "Login successful", token });
  };
