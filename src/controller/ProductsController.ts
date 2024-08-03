import {  Response } from "express";
import { AppDataSource } from "../data-source";
import { product } from "../entity/Product.entity";
import { CustomRequest } from "../middleware/authenticateToken.middleware"

export const getAllProductsr = async (req: CustomRequest, res: Response) => {
    try {
        const products = await AppDataSource.getRepository(product).find();
        res.json(products);
      } catch (error) {
        res.status(500).send("Error fetching products");
      }
  };
