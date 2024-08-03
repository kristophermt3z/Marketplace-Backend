import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { product } from '../entity/Product.entity';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const sellerId = req.query.sellerId;
    const productRepository = AppDataSource.getRepository(product);

    let products;
    if (sellerId) {
      products = await productRepository.find({
        where: { seller: { id: parseInt(sellerId as string) } },
        relations: ['seller'],
      });
    } else {
      products = await productRepository.find({ relations: ['seller'] });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal server error.');
  }
};
