import type { TMenu, TValidationError } from "./types";

const config = {
  prices: {
    min: 10,
    max: 800,
  },
  desciption: {
    min: 30,
    max: 120,
  },
  title: {
    min: 4,
    max: 30,
  },
}

export function validateMenu(menu: TMenu[]): TValidationError[] {
  const errors: TValidationError[] = [];

  // 1. Verificar que no se repitan IDs
  const idCounts = menu.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  Object.entries(idCounts).forEach(([id, count]) => {
    if (count > 1) {
      // Encuentra el primer item con ese ID para obtener el título
      const item = menu.find(i => i.id === id);
      errors.push({ id, title: item?.title || '(Título no encontrado)', issue: `El ID está repetido ${count} veces.` });
    }
  });

  // 3. Iterar una sola vez para verificar las reglas de cada item
  menu.forEach(item => {
    // Verificar precio
    const price = Number(item.price);
    if (isNaN(price) || price < config.prices.min || price > config.prices.max) {
      errors.push({
        id: item.id,
        title: item.title,
        issue: `El precio está fuera del rango permitido (${config.prices.min} - ${config.prices.max}) o no es un número válido.`,
        value: item.price
      });
    }

    // Verificar descripción
    if (item.description.length < config.desciption.min || item.description.length > config.desciption.max) {
      errors.push({
        id: item.id,
        title: item.title,
        issue: `La longitud de la descripción está fuera del rango permitido (${config.desciption.min} - ${config.desciption.max}).`,
        value: `${item.description.length} caracteres`
      });
    }

    // Verificar título
    if (item.title.length < config.title.min || item.title.length > config.title.max) {
      errors.push({
        id: item.id,
        title: item.title,
        issue: `La longitud del título está fuera del rango permitido (${config.title.min} - ${config.title.max}).`,
        value: `${item.title.length} caracteres`
      });
    }

    // Verificar consistencia de promoción
    if (item.promoDays.length > 0 && !item.promoPrice) {
      errors.push({ id: item.id, title: item.title, issue: "Tiene días de promoción pero no se definió un 'promoPrice'." });
    }
  });

  return errors;
}