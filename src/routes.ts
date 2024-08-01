import { NextFunction, Router, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { verify } from "jsonwebtoken";
import { VendedorController } from "./controller/VendedorController";


export const routes = (router: Router) => {
  router.post('/crear-vendedores', VendedorController.createVendedor);
};

/* const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //  Obtiene el token y valida que sea valido
    const accessToken = req.cookies["accessToken"];
    if (accessToken) {
      const payload: any = verify(accessToken, "access_secret");
      if (!payload) {
        return res.status(401).send({
          message: "No estas autorizado para acceder",
        });
      }
      const user = await userRepository.findOne({
        where: {
          id: payload.id,
        },
      });
      if (!user) {
        return res.status(401).send({
          message: "Este usuario no existe",
        });
      }

      return next();
    }
    return res.status(401).send({
      message: "No has iniciado sesion",
    });
  } catch (error) {
    return res.status(401).send({
      message: "error al comprobar sus credenciales, inicie sesion nuevamente",
      error: error,
    });
  }
}; */
