import type { TMenu, TTagsMenu, TTagsType } from "../utils/types";
import {menuRepository, MenuRepository } from "./menuRepository";


class MenuService {
  menuRepository: MenuRepository;
  constructor({ menuRepository }: { menuRepository: MenuRepository}) {
    this.menuRepository = menuRepository;
  }

  getAll() {
    return this.menuRepository.getAll();
  }
  query(menu?: TMenu[]) {
    return this.menuRepository.query(menu);
  }
  getById(id: string) {
    return this.menuRepository.getById(id);
  }
  getIfExistPromo() {
    return this.menuRepository.getIfExistPromo();
  }
  getByType({types, limit}: {types: TTagsType[], limit?: number}) {
    return this.menuRepository.getByType({types, limit});
  }
}

const menuService = new MenuService({menuRepository});

export default menuService;