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

# Change theme Automatilly
### you can also just use the “media” option to automatically set the dark or light theme based on the browser’s color scheme preference.
```
// tailwind.config.js
module.exports = {
  darkMode: 'media',
  // ...
}
```

# Enjoy!
### Front-End: Jorge Cruz

