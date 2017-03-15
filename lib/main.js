'use babel'

import path from 'path'
import fs from 'fs'

const errorMatch = '(?s)"(?<file>[\\/0-9a-zA-Z\\._\\-]+)", line (?<line>\\d+), characters (?<col>\\d+)-(?<col_end>\\d+):\\s*(?<message>.+?)\\n\\S'

function setupTargets () {
  const oasis = atom.config.get('build-oasis.oasisPath')

  return [{
    exec: oasis,
    name: 'setup',
    args: ['setup'],
    atomCommandName: 'build-oasis:setup',
    errorMatch
  }, {
    exec: oasis,
    name: 'setup weak',
    args: ['setup', '-setup-update', 'weak'],
    atomCommandName: 'build-oasis:setup-weak',
    errorMatch
  }, {
    exec: oasis,
    name: 'setup dynamic',
    args: ['setup', '-setup-update', 'dynamic'],
    atomCommandName: 'build-oasis:setup-dynamic',
    errorMatch
  }]
}

const commands = ['build', 'configure', 'test', 'doc', 'clean', 'distclean', 'all']

function buildTargets () {
  const ocaml = atom.config.get('build-oasis.ocamlPath')

  return commands.map((command) => {
    return {
      exec: ocaml,
      name: command,
      args: ['setup.ml', `-${command}`],
      atomCommandName: `build-oasis:${command}`,
      errorMatch
    }
  })
}

export function provideBuilder () {
  return class OasisBuildProvider {
    constructor (cwd) {
      this.cwd = cwd
    }

    getNiceName () {
      return 'oasis'
    }

    isEligible () {
      return fs.existsSync(path.join(this.cwd, '_oasis'))
    }

    settings () {
      if (fs.existsSync(path.join(this.cwd, 'setup.ml'))) {
        return buildTargets().concat(setupTargets())
      } else {
        return setupTargets()
      }
    }
  }
}
