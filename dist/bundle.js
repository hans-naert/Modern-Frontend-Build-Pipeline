(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/utils.js
  function greet(name) {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    let greeting = "";
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    return `${greeting}, ${name}!`;
  }
  function getCurrentTime() {
    const now = /* @__PURE__ */ new Date();
    return now.toLocaleTimeString();
  }
  var init_utils = __esm({
    "src/utils.js"() {
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
      init_utils();
      document.addEventListener("DOMContentLoaded", () => {
        const app = document.getElementById("app");
        const heading = document.createElement("h1");
        heading.textContent = greet("esbuild user");
        const timeDisplay = document.createElement("p");
        timeDisplay.textContent = `Current time: ${getCurrentTime()}`;
        app.appendChild(heading);
        app.appendChild(timeDisplay);
        console.log("Application initialized!");
      });
    }
  });
  require_main();
})();
