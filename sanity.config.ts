
"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const singletonTypes = ["siteSettings"];

const singletonActions = new Set([
  "publish",
  "unpublish",
  "discardChanges",
  "restore",
]);

export default defineConfig({
  name: "default",
  title: "AfriGenetry Link",

  basePath: "/studio",
  projectId,
  dataset,

  schema,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (template) => !singletonTypes.includes(template.templateId)
        );
      }

      return prev;
    },

    actions: (prev, context) => {
      if (singletonTypes.includes(context.schemaType)) {
        return prev.filter(
          ({ action }) => action && singletonActions.has(action)
        );
      }

      return prev;
    },
  },
});
