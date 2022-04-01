global.env = function (key, defaultValue = null) {
  return process.env[key] || defaultValue
}
