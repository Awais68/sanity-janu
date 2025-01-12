import { title } from "process";

export const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "age",
      title: "Age",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
