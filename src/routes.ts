import { Router } from "express";
import { createVendedor, loginVendedor } from "./controller/AuthVendedorController";
import {authenticateToken} from "./middleware/authenticateToken.middleware"
import { createProduct, getProductsForSeller } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', createVendedor);
  router.post('/login', loginVendedor);
  router.post('/products',authenticateToken, createProduct);
  router.get('/products', authenticateToken, getProductsForSeller);
};
