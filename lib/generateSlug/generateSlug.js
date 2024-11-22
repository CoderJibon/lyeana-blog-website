const generateSlug = (text) => {
  return text
    .toString() // Ensure it's a string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^a-z0-9 -]/g, "") // Remove non-alphanumeric characters except spaces and dashes
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-"); // Remove consecutive dashes
};

export default generateSlug;
