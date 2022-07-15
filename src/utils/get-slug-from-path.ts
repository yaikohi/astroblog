/**
 * Returns the slug from a path deriven from the markdown files inside of the filesystem-based routing used by Astro.
 * 
 * For example, it would return '1' if the markdown file was named '1.md'.
 */
 export const getSlugFromPath = (path: string): string => {
    return path.split("/").at(-1).replace(".md", "");
  };
  