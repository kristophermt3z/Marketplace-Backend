import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { vendedores } from "../entity/vendedor";

export class VendedorController {
    static createVendedor = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        
        if (!(email && password)) {
            res.status(400).send("Todos los campos son necesarios (email, password).");
            return;
        }
        
        const vendedorRepository = AppDataSource.getRepository(vendedores);
        let vendedor = new vendedores();
        vendedor.email = email;
        vendedor.password = password;  

        try {
            await vendedorRepository.save(vendedor);
            res.status(201).send("Vendedor creado.");
        } catch (e:any) {
            res.status(500).send("Error al crear el vendedor: " + e.message);
        }
    };
}
