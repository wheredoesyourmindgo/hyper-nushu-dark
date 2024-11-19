module.exports.decorateConfig = (config) => {
  const nushuDarkColors = {
    foregroundColor: "#d7cfc7",
    backgroundColor: "#25211d",
    selectionColor: "#4a3b23",
    cursorColor: "#3c7d3f",
    borderColor: "#3f3b36e6",
    colors: {
      black: "#484f58",
      red: "#ff7b72",
      green: "#3fb950",
      yellow: "#d29922",
      blue: "#58a6ff",
      magenta: "#bc8cff",
      cyan: "#39c5cf",
      white: "#b1bac4",
      lightBlack: "#6e7681",
      lightRed: "#ffa198",
      lightGreen: "#56d364",
      lightYellow: "#e3b341",
      lightBlue: "#79c0ff",
      lightMagenta: "#d2a8ff",
      lightCyan: "#56d4dd",
      lightWhite: "#ffffff",
    },
    css: `
      * {
        text-rendering: optimizeLegibility;
      }
      .tab_tab {
        color: #7d8590;
        background-color: #2b2724;
      }
      .tab_tab.tab_active {
        color: #d7cfc7;
        background-color: #25211c;
      },
    `,
  };

  return Object.assign({}, config, nushuDarkColors);
};
