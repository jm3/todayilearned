## todayilearned blog

![GitHub repo size][code-size]
[![Dependencies][deps-img]][deps]

[code-size]: https://img.shields.io/github/repo-size/jm3/todayilearned.svg
[deps-img]: https://david-dm.org/jm3/todayilearned.svg
[deps]: https://david-dm.org/jm3/todayilearned

A summer of code project, rebooting my front-end web dev skills

### Setup

   brew install hugo (use amplify.yml instrux on 'nix)
   npm install
   npm run setup
   npm start

### Uses:

- [AWS Amplify](https://aws.amazon.com/amplify/) for continuous integration / deployment / hosting / CDN / SSL
- [Hugo](https://gohugo.io/) generating the site files: `hugo serve` (new tab) `open http://localhost:1313/`
- a custom, bespoke, Boostrap-less Hugo theme
- [Stylelint](https://stylelint.io/) for enforcing [stylesheet discipline](https://getyarn.io/yarn-clip/7e8ae3a9-17c6-4ed5-83aa-71110490590f)
- [PostCSS](https://github.com/postcss/postcss) for CSS processing
