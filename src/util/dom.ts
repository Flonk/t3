import { unsafeCast } from "./util";

export const $ = <T>(selector: string, parent: ParentNode = document) =>
  unsafeCast<T>(parent.querySelector(selector));

export const $$ = <T>(selector: string, parent: ParentNode = document) =>
  unsafeCast<T[]>(Array.from(parent.querySelectorAll(selector)));
