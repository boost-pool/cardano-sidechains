export const isDarkMode = () => {
  const div = document.getElementById('app');
  if (!div) return false;
  return div.classList.contains('dark');
}

export const changeTheme = () => {
  console.log('handleTheme');
  // window.matchMedia('(prefers-color-scheme: dark)').matches, match OS preference
  const div = document.getElementById('app');
  if (!div) return;

  if (div.classList.contains('dark')) {
    console.log('prev dark');
    // Tailwind
    div.classList.remove("dark");
    div.classList.add("light");
    document.documentElement.style.setProperty('background-color', 'white');
  } else {
    console.log('prev light');
    div.classList.remove("light");
    div.classList.add("dark");
    document.documentElement.style.setProperty('background-color', 'black');
  }
};
