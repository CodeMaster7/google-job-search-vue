import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},

	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},

	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],

	// Vitest plugin configuration
	{
		files: ['src/**/__tests__/*', '**/*.spec.js', '**/*.test.js'],
		plugins: {
			vitest: pluginVitest,
		},
		rules: {
			...pluginVitest.configs.recommended.rules,
		},
	},

	// Vitest globals plugin configuration
	{
		files: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/**/__tests__/**'],
		plugins: {
			'vitest-globals': vitestGlobals,
		},
		languageOptions: {
			globals: {
				...vitestGlobals.environments.env.globals,
			},
		},
	},
]
