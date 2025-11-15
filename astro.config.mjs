// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sidebar from "./src/config/sidebar.json";
import embeds from "astro-embed/integration";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    embeds(),
    starlight({
      title: "DealDroid",
      description:
        "Comprehensive documentation to help you get started and make the most of DealDroid.",
      editLink: {
        baseUrl: "https://github.com/Deal-Droid/docs/edit/main/",
      },
      favicon: "/favicon.svg",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "32x32",
          },
        },
        {
          tag: "script",
          content: `
            document.addEventListener('DOMContentLoaded', function() {
              const logo = document.querySelector('.site-title');
              if (logo) {
                logo.addEventListener('click', function(e) {
                  e.preventDefault();
                  window.location.href = 'https://dealdroid.net';
                });
                logo.style.cursor = 'pointer';
              }
            });
          `,
        },
      ],
      logo: {
        light: "/src/assets/logo.svg",
        dark: "/src/assets/logo.svg",
        alt: "Dealdroid Logo",
      },
      titleDelimiter: "|",
      expressiveCode: {
        defaultProps: {
          // Enable word wrap for all code blocks
          wrap: true,
        },
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        th: {
          label: "ไทย",
          lang: "th",
        },
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/ZnGSSbQg4N",
        },
      ],
      sidebar: sidebar.main,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
