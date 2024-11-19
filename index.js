module.exports.decorateConfig = (config) => {
  const nushuDarkColors = {
    backgroundColor: '#F8F9FA', // Background
    foregroundColor: '#333333', // Foreground (Text)
    cursorColor: '#FF5733',     // Cursor
    borderColor: '#CCCCCC',     // Border
    selectionColor: 'rgba(255, 87, 51, 0.3)', // Selection (rgba)
    colors: {
      black: '#1E1E1E',
      red: '#FF5733',
      green: '#28A745',
      yellow: '#FFC107',
      blue: '#007BFF',
      magenta: '#6F42C1',
      cyan: '#17A2B8',
      white: '#F8F9FA',
      lightBlack: '#555555',
      lightRed: '#FF7961',
      lightGreen: '#33D17A',
      lightYellow: '#FFD54F',
      lightBlue: '#409EFF',
      lightMagenta: '#AF69EF',
      lightCyan: '#20C997',
      lightWhite: '#FFFFFF',
    }
  };

  return Object.assign({}, config, nushuDarkColors);
};
