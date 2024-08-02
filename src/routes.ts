import { Router } from "express";
import { createVendedor, loginVendedor } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', createVendedor);
  router.post('/login', loginVendedor);
};
