# @kelysty/system

- [ ] Create functionality to read local `kelysty.config.*` file and get advanced library configuration out of it. I'd like to pass in such tweaks as **theme**, **accent** and **secondary** colors
- [ ] Create `ColorProvider` that will controll `accent` and `secondary` colors within the application. It allows users to customize their colors from the `kelysty.config` file. It has to calculate hover, focus, active, disabled and other states' versions of these colors dynamically.
- [ ] Create `FontProvider` that will be responsible for the `font size` throughout the application, so users would be able to change primary font size and whole app would response on that

- [ ] Create `stories` and `tests` fro providers
