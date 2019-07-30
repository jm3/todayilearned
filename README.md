## todayilearned blog

![GitHub repo size][code-size]
[![Dependencies][deps-img]][deps]
[![Licensing][licensing-img]][licensing]
[![Visual Testing][visual-testing-img]][visual-testing]

A summer of code project wherein I revisit and reboot my front-end web dev skills.

### Setup

```bash
brew install hugo
npm install
npm run setup
npm start
```

### Third-Party Components

- [Hugo](https://gohugo.io/) for generating the site files: `hugo serve` ... `open http://localhost:1313/`
- [AWS Amplify Console](https://aws.amazon.com/amplify/) for CI, deployment/hosting, CDN, and SSL
- a bespoke, Boostrap-less Hugo theme
- [PostCSS](https://github.com/postcss/postcss) for CSS processing
- [Stylelint](https://stylelint.io/) for enforcing [stylesheet discipline](https://getyarn.io/yarn-clip/7e8ae3a9-17c6-4ed5-83aa-71110490590f)
- [Percy](https://percy.io/jm3/todayilearned) for automated [visual testing](https://percy.io/)
- [Fossa][licensing] for license compliance monitoring

### License

[![Licensing][licensing-big]][licensing]

[code-size]: https://img.shields.io/github/repo-size/jm3/todayilearned.svg
[deps]: https://david-dm.org/jm3/todayilearned
[deps-img]: https://david-dm.org/jm3/todayilearned/dev-status.svg
[licensing]: https://app.fossa.io/projects/git%2Bgithub.com%2Fjm3%2Ftodayilearned
[licensing-big]: https://app.fossa.io/projects/git%2Bgithub.com%2Fjm3%2Ftodayilearned
[licensing-img]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjm3%2Ftodayilearned.svg?type=shield
[visual-testing]: https://percy.io/jm3/today-i-learned
[visual-testing-img]: https://percy.io/static/images/percy-badge.svg
