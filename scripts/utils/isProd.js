function isProd() {
  const argv = process.argv.slice(2).map((v) => v.toLowerCase());
  return argv.includes('--prod');
}

module.exports = isProd();
