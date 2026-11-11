
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("AfriGenetry Link CMS")
    .items([
      S.listItem()
        .title("Website Pages")
        .child(
          S.documentTypeList("page").title("Website Pages")
        ),

      S.divider(),

      S.listItem()
        .title("Stories & Insights")
        .child(
          S.documentTypeList("article").title("Articles & Stories")
        ),

      S.listItem()
        .title("Events")
        .child(
          S.documentTypeList("event").title("Events")
        ),

      S.listItem()
        .title("Programmes & Initiatives")
        .child(
          S.documentTypeList("programme").title("Programmes & Initiatives")
        ),

      S.listItem()
        .title("Resources")
        .child(
          S.documentTypeList("resource").title("Resources")
        ),

      S.listItem()
        .title("Team Members")
        .child(
          S.documentTypeList("teamMember").title("Team Members")
        ),

      S.divider(),

      S.listItem()
        .title("Global Website Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
