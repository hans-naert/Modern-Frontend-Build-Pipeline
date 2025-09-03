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

  // src/ui.js
  function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
  }
  function addStyles(element, styles) {
    Object.assign(element.style, styles);
    return element;
  }
  var init_ui = __esm({
    "src/ui.js"() {
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
      init_utils();
      init_ui();
      document.addEventListener("DOMContentLoaded", () => {
        const app = document.getElementById("app");
        const heading = document.createElement("h1");
        heading.textContent = greet("esbuild user");
        const timeDisplay = document.createElement("p");
        timeDisplay.textContent = `Current time: ${getCurrentTime()}`;
        timeDisplay.id = "time-display";
        const refreshButton = createButton("Refresh Time", () => {
          timeDisplay.textContent = `Current time: ${getCurrentTime()}`;
        });
        addStyles(heading, {
          color: "#3b82f6",
          marginBottom: "0.5rem"
        });
        addStyles(timeDisplay, {
          color: "#4b5563",
          fontWeight: "bold"
        });
        app.appendChild(heading);
        app.appendChild(timeDisplay);
        app.appendChild(refreshButton);
        console.log("Application initialized with ESM!");
      });
    }
  });
  require_main();
})();
