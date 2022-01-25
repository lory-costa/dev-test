
# Dev Test

> Replicating the banner, header and hero of https://girlsintech.org/

> [Live demo here](https://devtestmain.gatsbyjs.io/)

### From the command line

```bash
npm install # to install dependencies
npm start # to start the dev server
```

You can find the server running on [http://localhost:8000](http://localhost:8000).


## What was done

Replication using React and Tailwind.
- Banner created and made responsible, with transition effect on link.
- Banner is not visible while on mobile with menu opened.
- Header (logo + navigation + button) created, and made responsive reusing the same template.
- Jobs link toggles dropdown and changes opacity of other menu items when Jobs dropdown is opened.
- Navigation is displayed differently on mobile, with a different dropdown presentation for Jobs.
- Mobile button created to open and close navigation on mobile.
- Social links bar created for mobile with menu opened.
- Custom colours added as Tailwind variable.
- Hero banner created and made responsive.

### Challenges

For the navigation menu's mobile view, I thought of two options: build two different components, or try to reuse the same component and make it responsive.
The first option might have been a bit easier to read, but would generate a lot of repetition, so I decided to try the second approach.



## Next steps

- [ ] Center-align logo and navigation bar (they came out of place after the implementation of the dropdown menu)
- [ ] Add shadow to sticky header
- [ ] Hide social links component when dropdown "Jobs" is opened on mobile view
- [ ] Find, import and consume similar font (the one they use is paid)
- [ ] Create component for primary and secondary buttons
- [ ] Write some tests
- [ ] Fix build warnings (href attributes)

