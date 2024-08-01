import { Router } from "express";
import { VendedorController } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', VendedorController.createVendedor);
};
