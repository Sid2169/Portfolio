import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      "react-hooks/purity": "off",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "dist/**", "node_modules/**"]),
])

export default eslintConfig