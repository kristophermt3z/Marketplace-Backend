import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { vendedores } from "../entity/vendedor";
import bcryptjs from "bcryptjs"

export const createVendedor = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        
        if (!(email && password)) {
            res.status(400).send("Todos los campos son necesarios (email, password).");
            return;
        }
        
        const vendedorRepository = AppDataSource.getRepository(vendedores);
        const vendedor = new vendedores();
        vendedor.email = email;
        vendedor.password = await bcryptjs.hash(password, 10);  

        try {
            await vendedorRepository.save(vendedor);
            res.status(201).send("Vendedor creado.");
        } catch (e: any) {
            res.status(500).send("Error al crear el vendedor: " + e.message);
        }
    };

    export const getAllVendedores = async (req: Request, res: Response) => {
        const vendedorRepository = AppDataSource.getRepository(vendedores);

        try {
            const vendedores = await vendedorRepository.find();
            res.status(200).send(vendedores);
        } catch (e: any) {
            res.status(500).send("Error al obtener los vendedores: " + e.message);
        }
    };

