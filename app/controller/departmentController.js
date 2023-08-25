import data from "../data.json" assert { type: "json" };

export const departamentos = (req, res) => {
  res.json(data);
};

export const departamento = (req, res) => {
  const departmentToFind = data.find((element) => req.params.id == element.id);
  res.json(departmentToFind);
};

export const departamentoCabecera = (req, res) => {
  const departmentToFind = data.find((element) => req.params.id == element.id);
  const { cabecera, municipios } = departmentToFind;
  const municipio = municipios.find((element) => cabecera == element.id);
  res.json(municipio);
};

export const departamentoMunicipios = (req, res) => {
  const departmentToFind = data.find((element) => req.params.id == element.id);
  const { municipios } = departmentToFind;
  res.json(municipios);
};

export const departamentoMunicipio = (req, res) => {
  const departmentToFind = data.find((element) => req.params.idDp == element.id);
  const { municipios } = departmentToFind;
  const municipio = municipios.find((element) => req.params.idMn == element.id);
  res.json(municipio);
};
