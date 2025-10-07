import { menuImage } from "./imageService";
import type { TMenu, TPromoDays, TTagsType } from "../utils/types";
import { validateMenu } from "../utils/errors";

export const menu: TMenu[] = [
    {
        id: "hamburguesaBBQ",
        title: "Hamburguesa BBQ",
        description: "Salsa BBQ ahumada, queso cheddar, tocino y aros de cebolla.",
        price: "89.50",
        promoPrice: "75.00",
        promoDays: ["sa", "do"],
        img: menuImage.hamburgesa,
        tag: ["hamburgesas"],
        type: "comida",
        sortOrder: 10
    }, {
        id: "hamburguesaClasica",
        title: "Hamburguesa Clásica",
        description: "Nuestra receta original con carne 100% de res, lechuga y tomate.",
        price: "79.99",
        promoDays: [],
        img: menuImage.hamburgesa,
        tag: ["hamburgesas"],
        type: "comida",
        sortOrder: 20
    },
    {
        id: "hamburguesaDoble",
        title: "Hamburguesa Doble",
        description: "Doble carne, doble queso, lechuga, tomate y salsa especial.",
        price: "99.00",
        promoPrice: "85.00",
        promoDays: ["ma"],
        img: menuImage.hamburgesa,
        tag: ["hamburgesas"],
        type: "comida",
        sortOrder: 30
    },
    {
        id: "hamburguesaVegetariana",
        title: "Hamburguesa Vegetariana",
        description: "Deliciosa hamburguesa a base de plantas con aguacate.",
        price: "79.99",
        promoPrice: "69.99",
        promoDays: ["do", "lu"],
        img: menuImage.hamburgesa,
        tag: ["hamburgesas"],
        type: "comida",
        sortOrder: 50
    },
    {
        id: "papasFritas",
        title: "Papas Fritas",
        description: "Crujientes y doradas, el acompañamiento perfecto.",
        price: "25.50",
        promoDays: [],
        img: menuImage.papas,
        tag: ["complementos"],
        type: "complementos",
        sortOrder: 210
    },
    {
        id: "refrescoGrande",
        title: "Refresco Grande",
        description: "Elige tu sabor favorito de nuestra barra de refrescos.",
        price: "30.00",
        promoDays: [],
        img: menuImage.soda,
        tag: ["bebidas"],
        type: "bebidas",
        sortOrder: 300
    },
    {
        id: "hamburguesaPollo",
        title: "Hamburguesa de Pollo",
        description: "Pechuga de pollo empanizada y aderezos especiales.",
        price: "65.50",
        promoPrice: "55.00",
        promoDays: ["mi"],
        img: menuImage.hamburgesa,
        tag: ["hamburgesas"],
        type: "comida",
        sortOrder: 40
    },
    {
        id: "burrito",
        title: "Burrito",
        description: "Carne asada, frijoles y guacamole en una tortilla de harina.",
        price: "80.00",
        promoPrice: "70.00",
        promoDays: ["ju"],
        img: menuImage.aguacate,
        tag: ["burritos"],
        type: "comida",
        sortOrder: 100
    },
    {
        id: "nachosSupremos",
        title: "Nachos Supremos",
        description: "Totopos de maíz cubiertos con queso fundido, carne, frijoles, guacamole y jalapeños.",
        price: "95.00",
        promoPrice: "80.00",
        promoDays: ["vi"],
        img: menuImage.aguacate,
        tag: ["entradas", "complementos"],
        type: "comida",
        sortOrder: 200
    },
    {
        id: "malteadaEspecial",
        title: "Malteada Especial",
        description: "Cremosa malteada de tu sabor favorito: fresa, chocolate o vainilla, con crema batida.",
        price: "45.00",
        promoDays: [],
        img: menuImage.soda,
        tag: ["bebidas", "postres"],
        type: "bebidas",
        sortOrder: 310
    },
    {
        id: "hotdogClasico",
        title: "Hot Dog Clásico",
        description: "Salchicha de res a la parrilla en un pan suave, con tus aderezos preferidos.",
        price: "55.00",
        promoDays: [],
        img: menuImage.hamburgesa,
        tag: ["hotdogs"],
        type: "comida",
        sortOrder: 110
    },
]

// Esta es la clase que acabamos de diseñar.
// La puedes mover a su propio archivo (ej. `service/menuQueryBuilder.ts`) e importarla aquí.
export class MenuQueryBuilder {
    private data: TMenu[];
    private filters: {
        tags?: string[];
    } = {};
    private sortOptions: { field: keyof TMenu, direction: 'asc' | 'desc' } | null = null;
    private limitCount: number | null = null;

    constructor(data: TMenu[]) {
        this.data = [...data];
    }

    byTags(tags: string[]) {
        this.filters.tags = tags;
        return this;
    }

    sortBy(field: keyof TMenu, direction: 'asc' | 'desc' = 'asc') {
        this.sortOptions = { field, direction };
        return this;
    }

    limit(count: number) {
        this.limitCount = count;
        return this;
    }

    get(): TMenu[] {
        let result = [...this.data];

        if (this.filters.tags && this.filters.tags.length > 0) {
            result = result.filter(item => item.tag.some(t => this.filters.tags!.includes(t)));
        }

        if (this.sortOptions) {
            const { field, direction } = this.sortOptions;

            result.sort((a, b) => {
                if (a[field]! < b[field]!) return direction === 'asc' ? -1 : 1;
                if (a[field]! > b[field]!) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        if (this.limitCount !== null) {
            result = result.slice(0, this.limitCount);
        }

        return result;
    }
}

export class MenuRepository {
    menu: TMenu[];
    constructor(menu: TMenu[]) {
        this.menu = menu;
    }
    getAll() {
        return this.menu;
    }

    /**
     * Inicia un constructor de consultas para el menú.
     */
    query(menu?: TMenu[]) {
        if (menu) {
            return new MenuQueryBuilder(menu)
        }
        return new MenuQueryBuilder(this.menu);
    }

    getSortOrder() {
        return this.menu.sort((a, b) => a.sortOrder - b.sortOrder);
    }
    getByTags({tags,limit}:{tags: string[],limit?: number}) {
        const menuByTags = this.menu.filter((menu) => {
            return menu.tag.some((tag) => tags.includes(tag));
        });
        if (limit)
            return menuByTags.slice(0, limit);
        return menuByTags
    }
    getByType({types, limit}: {types: TTagsType[], limit?: number}) {
        const menuByType = this.menu.filter((item) => types.includes(item.type));
        if (limit) {
            return menuByType.slice(0, limit);
        }
        return menuByType;
    }
    getById(id: string) {
        return this.menu.find((menu) => menu.id === id);
    }
    getIfExistPromo(){
        return this.menu.filter((menu) => menu.promoDays.length > 0);
    }

    isValidMenu() {
        const errors = validateMenu(this.menu);
        if (errors.length > 0) {
            console.error("El menú contiene errores de validación. Por favor, revisa los siguientes items:");
            errors.forEach(error => {
                const errorObj = {
                    id: error.id,
                    title: error.title,
                    issue: error.issue,
                    value: error.value
                }
                console.warn("- Item Error:", errorObj);
            });
        }
    }
}

const menuRepository = new MenuRepository(menu);
menuRepository.isValidMenu();
export { menuRepository };