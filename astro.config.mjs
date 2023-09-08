import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import unocss from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
	// Enable Solid to support Solid JSX components.
	integrations: [solid(), unocss()],
});

