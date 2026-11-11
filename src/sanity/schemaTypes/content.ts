
import { defineField, defineType } from "sanity";

const slugField = (source = "title") =>
    defineField({
        name: "slug",
        title: "URL Slug",
        type: "slug",
        options: { source, maxLength: 96 },
        validation: (Rule) => Rule.required(),
    });

const imageField = (name = "image", title = "Image") =>
    defineField({
        name,
        title,
        type: "image",
        options: { hotspot: true },
        fields: [
            defineField({
                name: "alt",
                title: "Alternative Text",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
        ],
    });

const richTextField = defineField({
    name: "body",
    title: "Article Content",
    type: "array",
    group: "content",
    of: [
        {
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "Heading 2", value: "h2" },
                { title: "Heading 3", value: "h3" },
                { title: "Heading 4", value: "h4" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
            ],
            marks: {
                decorators: [
                    { title: "Bold", value: "strong" },
                    { title: "Italic", value: "em" },
                    { title: "Underline", value: "underline" },
                ],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "External or Internal Link",
                        fields: [
                            {
                                name: "href",
                                type: "url",
                                title: "URL",
                                validation: (Rule) =>
                                    Rule.required().uri({
                                        scheme: ["http", "https", "mailto", "tel"],
                                    }),
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
    ],
});

export const article = defineType({
    name: "article",
    title: "Articles & Stories",
    type: "document",
    groups: [
        { name: "content", title: "Article Content", default: true },
        { name: "seo", title: "SEO & Search" },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Article Title",
            type: "string",
            validation: (Rule) => Rule.required().max(120),
            group: "content",
        }),
        slugField(),
        defineField({
            name: "excerpt",
            title: "Short Description",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required().max(300),
            group: "content",
        }),
        imageField("coverImage", "Cover Image"),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    "Ancestry & Heritage",
                    "Genomics",
                    "Family Health History",
                    "Community",
                    "Research",
                    "News",
                    "Education",
                ],
            },
            validation: (Rule) => Rule.required(),
            group: "content",
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "publishedAt",
            title: "Publication Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
            group: "content",
        }),
        richTextField,
        defineField({
            name: "featured",
            title: "Featured Article",
            type: "boolean",
            initialValue: false,
            group: "content",
        }),
        defineField({
            name: "seoTitle",
            title: "SEO Title",
            type: "string",
            group: "seo",
        }),
        defineField({
            name: "seoDescription",
            title: "SEO Description",
            type: "text",
            rows: 3,
            group: "seo",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "coverImage",
        },
    },
});

export const event = defineType({
    name: "event",
    title: "Events",
    type: "document",
    groups: [
        { name: "content", title: "Event Content", default: true },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Event Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        slugField(),
        defineField({
            name: "summary",
            title: "Event Description",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        imageField("coverImage", "Event Image"),
        defineField({
            name: "startDate",
            title: "Start Date & Time",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "endDate",
            title: "End Date & Time",
            type: "datetime",
        }),
        defineField({
            name: "timezone",
            title: "Timezone",
            type: "string",
            description: "Example: America/Chicago",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
        defineField({
            name: "address",
            title: "Full Address",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "registrationUrl",
            title: "Registration Link",
            type: "url",
        }),
        defineField({
            name: "eventStatus",
            title: "Event Status",
            type: "string",
            options: {
                list: [
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Completed", value: "completed" },
                    { title: "Cancelled", value: "cancelled" },
                ],
            },
            initialValue: "upcoming",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "featured",
            title: "Featured Event",
            type: "boolean",
            initialValue: false,
        }),
        richTextField,
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "startDate",
            media: "coverImage",
        },
    },
});

export const programme = defineType({
    name: "programme",
    title: "Programmes & Initiatives",
    type: "document",
    groups: [
        { name: "content", title: "Programme Content", default: true },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Programme Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        slugField(),
        defineField({
            name: "summary",
            title: "Short Description",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        imageField("coverImage", "Programme Image"),
        defineField({
            name: "status",
            title: "Programme Status",
            type: "string",
            options: {
                list: [
                    { title: "Active", value: "active" },
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Completed", value: "completed" },
                ],
            },
            initialValue: "active",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: "date",
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "date",
        }),
        richTextField,
        defineField({
            name: "actionLabel",
            title: "Call To Action Text",
            type: "string",
        }),
        defineField({
            name: "actionUrl",
            title: "Call To Action Link",
            type: "url",
        }),
        defineField({
            name: "featured",
            title: "Featured Programme",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "status",
            media: "coverImage",
        },
    },
});

export const resource = defineType({
    name: "resource",
    title: "Resources",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Resource Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        slugField(),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        imageField("coverImage", "Resource Image"),
        defineField({
            name: "category",
            title: "Resource Category",
            type: "string",
            options: {
                list: [
                    "Guides",
                    "Educational Materials",
                    "Research",
                    "Reports",
                    "Videos",
                    "External Resources",
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "resourceType",
            title: "Resource Type",
            type: "string",
            options: {
                list: [
                    { title: "Downloadable File", value: "file" },
                    { title: "External Website", value: "external" },
                    { title: "Video", value: "video" },
                    { title: "Article", value: "article" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "file",
            title: "Upload Resource File",
            type: "file",
            options: { accept: ".pdf,.doc,.docx,.xlsx,.pptx" },
        }),
        defineField({
            name: "externalUrl",
            title: "External Resource URL",
            type: "url",
        }),
        defineField({
            name: "publishedAt",
            title: "Publication Date",
            type: "date",
        }),
        defineField({
            name: "featured",
            title: "Featured Resource",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "coverImage",
        },
    },
});

export const teamMember = defineType({
    name: "teamMember",
    title: "Team Members",
    type: "document",
    groups: [
        { name: "content", title: "Team Member Content", default: true },
    ],
    fields: [
        defineField({
            name: "name",
            title: "Full Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "role",
            title: "Position / Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        slugField("name"),
        imageField("portrait", "Profile Photo"),
        defineField({
            name: "shortBio",
            title: "Short Biography",
            type: "text",
            rows: 3,
        }),
        richTextField,
        defineField({
            name: "email",
            title: "Public Contact Email",
            type: "string",
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn URL",
            type: "url",
        }),
        defineField({
            name: "displayOrder",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
        defineField({
            name: "isLeadership",
            title: "Leadership Team Member",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "role",
            media: "portrait",
        },
    },
});

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Global Website Settings",
    type: "document",
    groups: [
        { name: "general", title: "General", default: true },
        { name: "social", title: "Social Media" },
        { name: "footer", title: "Footer" },
        { name: "seo", title: "Default SEO" },
    ],
    fields: [
        defineField({
            name: "siteName",
            title: "Website Name",
            type: "string",
            validation: (Rule) => Rule.required(),
            group: "general",
        }),
        defineField({
            name: "tagline",
            title: "Website Tagline",
            type: "string",
            group: "general",
        }),
        defineField({
            name: "logo",
            title: "Website Logo",
            type: "image",
            group: "general",
        }),
        defineField({
            name: "contactEmail",
            title: "Public Contact Email",
            type: "string",
            group: "general",
        }),
        defineField({
            name: "socialLinks",
            title: "Social Media Links",
            type: "array",
            group: "social",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            options: {
                                list: [
                                    "Instagram",
                                    "Facebook",
                                    "LinkedIn",
                                    "X",
                                    "YouTube",
                                    "TikTok",
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "Profile URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: "platform", subtitle: "url" },
                    },
                },
            ],
        }),
        defineField({
            name: "footerDescription",
            title: "Footer Description",
            type: "text",
            rows: 3,
            group: "footer",
        }),
        defineField({
            name: "footerCopyright",
            title: "Copyright Text",
            type: "string",
            group: "footer",
        }),
        defineField({
            name: "defaultSeoTitle",
            title: "Default SEO Title",
            type: "string",
            group: "seo",
        }),
        defineField({
            name: "defaultSeoDescription",
            title: "Default SEO Description",
            type: "text",
            rows: 3,
            group: "seo",
        }),
        defineField({
            name: "defaultSeoImage",
            title: "Default Social Sharing Image",
            type: "image",
            group: "seo",
        }),
    ],
    preview: {
        prepare() {
            return { title: "Global Website Settings" };
        },
    },
});
