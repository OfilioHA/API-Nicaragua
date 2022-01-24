import { Router } from "express";
import { departamentos, departamento, departamentoCabecera, departamentoMunicipio, departamentoMunicipios } from "./app/controller/departmentController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("pages/index");
});

routes.get("/departamentos", departamentos)
routes.get("/departamentos/:id", departamento)
routes.get("/departamentos/:id/cabecera", departamentoCabecera)
routes.get("/departamentos/:id/municipios", departamentoMunicipios)
routes.get("/departamentos/:idDp/municipios/:idMn", departamentoMunicipio)


export { routes };
