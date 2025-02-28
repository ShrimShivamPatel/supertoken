import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // "@components": path.resolve(__dirname, "src/components"),
      // "@ui": path.resolve(__dirname, "src/components/ui"),
      // "@lib": path.resolve(__dirname, "src/lib"),
      // "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
};
