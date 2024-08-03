import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { product } from "../entity/Product.entity";
import { vendedores } from "../entity/vendedor";
import { CustomRequest } from "../middleware/authenticateToken.middleware"

export const createProduct = async (req: CustomRequest, res: Response) => {
  const { name, sku, quantity, price } = req.body;
  const userId = req.user?.id; 

  if (!name || !sku || !quantity || !price) {
    return res.status(400).send("All fields are required (name, sku, quantity, price).");
  }

  const productRepository = AppDataSource.getRepository(product);

  try {
    const productCreate = new product();
    productCreate.name = name;
    productCreate.sku = sku;
    productCreate.quantity = quantity;
    productCreate.price = price;
    productCreate.seller = { id: userId } as vendedores; // Only need ID for relation

    await productRepository.save(productCreate);
    res.status(201).send("Product created successfully.");
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send("Internal server error.");
  }
};

export const getProductsForSeller = async (req: CustomRequest, res: Response) => {
    const userId = req.user?.id;
  
    const productRepository = AppDataSource.getRepository(product);
  
    try {
      const products = await productRepository.find({
        where: { seller: { id: userId } },
      });
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal server error.");
    }
  };
