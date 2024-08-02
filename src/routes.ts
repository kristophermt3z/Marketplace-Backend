import { Router } from "express";
import { createVendedor } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', createVendedor);
};
