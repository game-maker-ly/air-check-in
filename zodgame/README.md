## ZodGame 定时自动签到

> 利用 Github Actions 定时任务实现自动签到。随机心情。

[![ZodGame-Auto-Checkin](https://github.com/ewigl/zodgame-auto-checkin/actions/workflows/Checkin.yml/badge.svg)](https://github.com/ewigl/zodgame-auto-checkin/actions/workflows/Checkin.yml)

### 使用方法

1. Fork 此仓库。
2. 在 fork 后的仓库中启用 Workflows。
3. 配置环境变量。

详细文档: https://ewigl.github.io/notes/posts/programming/github-actions/

### 环境变量

- **Environments**: `ZODGAME`

- **Secrets**:`COOKIE`, `FORMHASH`

### 注意事项

1. 不能使用 `document.cookie` 方式获取 Cookie，因为 ZodGame 部分 Cookie 具有 [HttpOnly](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Cookies#%E9%99%90%E5%88%B6%E8%AE%BF%E9%97%AE_cookie) 属性。

2. formhash 的获取方式：登录 ZodGame 网站，F12 打开控制台，输入以下代码回车获取。

   ```Javascript
   document.querySelector('[name=formhash]').value
   ```

3. cookie 与 formhash 一一对应，更新 cookie 时必须同时更新 formhash。
