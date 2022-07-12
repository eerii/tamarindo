# tamarindo

simple [three.js](https://threejs.org) typescript template. uses [bun](https://bun.sh) as a javascript backend and package manager and [esbuild](https://esbuild.github.io) as a temporary packager (while bun gets its own production bundler). can be used as a github template.

**get this repository**

```sh
git clone https://github.com/josekoalas/tamarindo
cd tamarindo
```

**install bun**

```sh
curl https://bun.sh/install | bash
```

**preprare the project**

```sh
bun install
```

**development server**

```sh
bun run dev
```

**package**

```sh
bun run build
```

**test the package version** _(requires python with http.server)_
  
```sh
bun run serve
```