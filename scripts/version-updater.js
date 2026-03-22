// scripts/version-updater.js
module.exports.readVersion = function(contents) {
  const match = contents.match(/\*\*Current Version:\*\*\s*([0-9.]+)/);
  return match ? match[1] : null;
};

module.exports.writeVersion = function(contents, version) {
  return contents.replace(/(\*\*Current Version:\*\*\s*)([0-9.]+)/, '$1' + version);
};
