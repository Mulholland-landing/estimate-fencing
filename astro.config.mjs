import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({ base: '/estimate-fencing/', integrations: [react()], output: 'static', devToolbar: { enabled: false } });
