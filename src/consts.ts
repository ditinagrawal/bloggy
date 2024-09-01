import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Bloggy",
  DESCRIPTION: "A blog by ditin agrawal.",
  EMAIL: "ditin.agrawal05@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my blog! I write about things I care about.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my thoughts and ideas.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects. Some are finished, some are not. Some are good, some are not.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/ditinagrawal",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ditinagrawal",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ditinagrawal",
  },
];
