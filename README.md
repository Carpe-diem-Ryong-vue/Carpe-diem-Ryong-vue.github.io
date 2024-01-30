# Carpe-diem-Ryong-vue.github.io

This template should help get you started developing with Vue 3 in Vite.

## How To Contribute
- WSL Ubuntu 22.04 LTS
- vim
- html/css
- vue.js

## How To Deploy
### STG dev  ( choi3179-hello-vue.web.app )
```bash
# manual firebase cmd*
$ firebase deploy
=== Deploying to 'github-vue-bac3c'...

i  deploying hosting
i  hosting[github-vue-bac3c]: beginning deploy...
i  hosting[github-vue-bac3c]: found 5 files in docs
✔  hosting[github-vue-bac3c]: file upload complete
i  hosting[github-vue-bac3c]: finalizing version...
✔  hosting[github-vue-bac3c]: version finalized
i  hosting[github-vue-bac3c]: releasing new version...
✔  hosting[github-vue-bac3c]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/github-vue-bac3c/overview
Hosting URL: https://github-vue-bac3c.web.app
```
### STG prod ( choi3179.github.io )

|STG|BRANCH|TRIGGER|URL|
|------|---|---|---|
|DEV|Branch of PR|manual firebase cmd|[https://github-vue-bac3c.web.app](https://github-vue-bac3c.web.app)|
|PRD|main|Auto Github Action|[https://carpe-diem-ryong-vue.github.io](https://carpe-diem-ryong-vue.github.io)|
  
#### Project Setup
```sh
npm install
```

#### Compile and Hot-Reload for Development
```sh
npm run dev
```

#### Compile and Minify for Production
```sh
npm run build
```
