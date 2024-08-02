import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { vendedores } from "../entity/vendedor";
import bcryptjs from "bcryptjs";

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
