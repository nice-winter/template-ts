import isCI from 'is-ci'

const isProd = !(process.env.INIT_CWD === process.cwd())

if (isProd || isCI) {
  process.exit()
}

try {
  const { execa } = await import('execa')
  await execa('simple-git-hooks', { stdout: process.stdout })
} catch (error) {
  console.error(error)
}
