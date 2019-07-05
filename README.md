## todayilearned blog

![GitHub repo size][code-size]
[![Dependencies][deps-img]][deps]

[code-size]: https://img.shields.io/github/repo-size/jm3/todayilearned.svg
[deps-img]: https://david-dm.org/jm3/todayilearned.svg
[deps]: https://david-dm.org/jm3/todayilearned

A summer of code project wherein I reboot my front-end web dev skills.

### Setup

```bash
brew install hugo
# note that libvips (which is required by sharp [which is required by gulp-responsive for saving images]) requires node 10 (TEN)
brew install node@10
npm install
npm run setup
npm start
```

### Uses:

- [Hugo](https://gohugo.io/) for generating the site files: `hugo serve` ... `open http://localhost:1313/`
- [AWS Amplify Console](https://aws.amazon.com/amplify/) for CI, deployment/hosting, CDN, and SSL
- a bespoke, Boostrap-less Hugo theme
- [PostCSS](https://github.com/postcss/postcss) for CSS processing
- [Stylelint](https://stylelint.io/) for enforcing [stylesheet discipline](https://getyarn.io/yarn-clip/7e8ae3a9-17c6-4ed5-83aa-71110490590f)
