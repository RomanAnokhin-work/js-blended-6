import { setTheme, getTheme } from './local-storage-api';
const change = document.querySelector('#themeToggle');

const theme = document.querySelector('.theme-dark');

populateTheme();

change.addEventListener('click', themeChange);

function themeChange(event) {
  let themeName = theme.className;

  if (themeName === 'theme-dark') {
    themeName = 'theme-light';
    theme.className = themeName;
    setTheme(themeName);
  } else if (themeName === 'theme-light') {
    themeName = 'theme-dark';
    theme.className = themeName;
    setTheme(themeName);
  }
}

function populateTheme() {
  console.log(getTheme());
  theme.className = getTheme();
}
