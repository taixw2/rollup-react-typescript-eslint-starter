import createBundle, { ENV, Options, Bundler } from './create-bundle'
import path from 'path'
import rmrf from 'rmrf'
import { JSONLoad } from './util'

interface Config extends Options {
  bundles: Bundler[]
}

const config = (JSONLoad(path.join(process.cwd(), '.configrc')) as unknown) as Config

rmrf(path.join(process.cwd(), config.output))
config.bundles.reduce(async (p: Promise<unknown>, c) => {
  return p
    .then(() => createBundle({ ...config, bundle: c }, ENV.DEVELOPMENT))
    .then(() => createBundle({ ...config, bundle: c }, ENV.PRODUCTION))
}, Promise.resolve())
// .catch(console.error)
