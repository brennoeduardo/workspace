// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  	typescript: { shim: false, },
  	components: true,
  	modules: ['nuxt-electron'],
  	app: {
		head: {
			titleTemplate: '%s - WorkSpace',
			title: 'Início',
			htmlAttrs: { lang: 'pt-br' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/public/favicon.ico" },
			],
		},
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "in-out" },
	},
  	css: [
		'@/assets/css/main.css',
		'@/assets/css/fonts.css',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
  	build: {
		transpile: ['vuetify'],
	},
  	electron: {
    build: [
      {
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(args: any) {
          args.reload()
        },
      },
    ],
	modules: [
		(options: any, nuxt: any) => {
			nuxt.hooks.hook('vite:extendConfig', (config: any) => {
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		//...
	],
	  vite: {
		vue: {
		  template: {
			transformAssetUrls,
		  },
		},
	  },
    renderer: {},
  	},
  	ssr: false, 
})