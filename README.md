# build-oasis

_Use [oasis] and [build] to compile your OCaml projects in Atom._


## Usage

If your project contains a `_oasis` file, this package provides the following
build targets with corresponding commands.

| Target        | Atom Command                | Oasis Command                       |
| ------------- | --------------------------- | ----------------------------------- |
| setup         | `build-oasis:setup`         | `oasis setup -setup-update none`    |
| setup weak    | `build-oasis:setup-weak`    | `oasis setup -setup-update weak`    |
| setup dynamic | `build-oasis:setup-dynamic` | `oasis setup -setup-update dynamic` |
| build         | `build-oasis:build`         | `ocaml setup.ml -build`             |
| configure     | `build-oasis:configure`     | `ocaml setup.ml -configure`         |
| test          | `build-oasis:test`          | `ocaml setup.ml -test`              |
| doc           | `build-oasis:doc`           | `ocaml setup.ml -doc`               |
| clean         | `build-oasis:clean`         | `ocaml setup.ml -clean`             |
| distclean     | `build-oasis:distclean`     | `ocaml setup.ml -distclean`         |
| all           | `build-oasis:all`           | `ocaml setup.ml -all`               |


## Installation

This package requires [build], [linter] and [oasis].

```sh
apm install build linter build-oasis
opam install oasis
```


[oasis]: http://oasis.forge.ocamlcore.org/
[build]: https://atom.io/packages/build
[linter]: https://atom.io/packages/linter
