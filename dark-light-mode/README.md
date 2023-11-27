# Dark Theme - Tailwindcss

## Design
### Create your design.

## Setting Dark Mode
### In the tailwind.config.js setting Dark Mode in Modules Export:

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  //Set Darkmode - class
  darkMode:'class',

  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Toogle Button
### Create and customize your buttom and add onclick function:

```
 <button

    // customize
    className='p-2 bg-black text-white w-[200px]'
    
    // event to click
    onClick={toogleDark}
    >
    Dark Mode

</button>
```
### Create the simple function:
```
//Setting dark class

function toogleDark(){
    document.documentElement.classList.toggle("dark")
  }
```

### And after this, just put the Class dark in every components you need, like this.

```
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

```

```
<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

# Now

### If you need detect theme using OS theme user, change for this!


```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //if you need the USER CHANGE THEME
  // set this.. 
  darkMode:'class',

  //but if you need the theme CHANGE USING OS user THEME (light - dark) 
  //set this (darMode:'media')
  
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Click here to access <a href="https://theme-dark-light-mode.netlify.app">Project Link</a>

# Enjoy!
### Front-End: Jorge Cruz

