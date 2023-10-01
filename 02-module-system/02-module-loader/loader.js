const originalRequire = require;

const fs = originalRequire("fs");

function loadModule(filename, module, require) {
  const warppedSrc = `(function (module, exports, require) {
    ${fs.readFileSync(filename, "utf8")}
  })(module, module.exports, require)`;

  eval(warppedSrc);
}

require = function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);
  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  const module = {
    exports: {},
    id,
  };

  require.cache[id] = module;

  loadModule(id, module, require);

  return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
  // 모듈이름으로 id로 불리게 되는 모듈의 전체경로를 찾아냄
  return originalRequire.resolve(moduleName);
};
