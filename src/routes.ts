import { Router } from "express";
import { createVendedor, getAllVendedores } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', createVendedor);
  router.get('/vendedores', getAllVendedores);
};
