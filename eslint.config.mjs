import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      // Generated files
      "src/generated/**/*",
      "**/generated/**/*",
      // Prisma generated files
      "**/prisma/generated/**/*",
      "**/@prisma/**/*",
      // Backup files
      "**/*_backup.*",
      "**/backup_*",
      // Other common generated patterns
      "**/.next/**/*",
      "**/node_modules/**/*",
      "**/dist/**/*",
      "**/build/**/*",
    ]
  }
];

export default eslintConfig;
