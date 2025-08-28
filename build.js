import { build } from 'esbuild'

const opts = {
    entryPoints: ['mod.ts'],
    bundle: true,
    format: 'iife',
    globalName: 'PPzPolly',

    logLevel: 'debug',
    treeShaking: true,
}

build({
    ...opts,
    outfile: 'dist/ppz-molly.js',
})

build({
    ...opts,
    outfile: 'dist/ppz-molly.min.js',
    minify: true,
})
