(() => {
  document.addEventListener('keydown', (key)=>{
    if(key.code === "KeyX" && key.altKey === true) {
      document.documentElement
        .classList.toggle('dark');

        localStorage.theme =
        document.documentElement
          .classList.contains('dark') ?
            'dark' : 'light';
    }
  })
  if(localStorage.length > 0
      && localStorage.theme
      && localStorage.theme === 'dark') {
    document.documentElement
      .classList.add('dark');
  } else {
    document.documentElement
      .classList.remove('dark');
  }
})()
