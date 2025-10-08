//Menu Services
export type TPromoDays = "lu" | "ma" | "mi" | "ju" | "vi" | "sa" | "do";
export type TTagsMenu =  "hamburgesas" | "complementos" | "burritos" | "bebidas" | "entradas" | "postres" | "hotdogs";
export type TTagsType = "comida" | "bebidas" | "complementos";
export const tags:{menu:TTagsMenu[],type:TTagsType[]} = {
  menu: ["hamburgesas", "complementos", "burritos", "bebidas", "entradas", "postres", "hotdogs"],
  type: ["comida", "complementos", "bebidas"]
}
export type TMenu = {
  id: string,
  title: string,
  description: string,
  price: string,
  promoPrice?: string,
  promoDays: (TPromoDays | string)[],
  tag: TTagsMenu[],
  type: TTagsType,
  img: ImageMenu,
  sortOrder: number,
}

export type TValidationError = {
  id: string;
  title: string;
  issue: string;
  value?: any;
}

export type ImageMenu = {
    src: ImageMetadata;
    alt: string;
}