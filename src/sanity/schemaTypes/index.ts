
import type { SchemaTypeDefinition } from "sanity";

import { page } from "./page";
import { pageSections } from "./sections";

import {
  article,
  event,
  programme,
  resource,
  teamMember,
  siteSettings,
} from "./content";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    ...pageSections,
    article,
    event,
    programme,
    resource,
    teamMember,
    siteSettings,
  ],
};
