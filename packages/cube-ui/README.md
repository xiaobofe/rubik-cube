# `cube-ui`

## 使用

1. 切换 npm 源为：`https://iservice.schneider-electric.cn/nexus/repository/npm-public-ds/`
2. `npm install @rubic/cube-ui`

## 发布

1. `npm login -registry=https://iservice.schneider-electric.cn/nexus/repository/npm-snapshots-ds`
2. `npm publish -registry=https://iservice.schneider-electric.cn/nexus/repository/npm-snapshots-ds`

## 查看那些内容将会发布

执行：`npx npm-packlist`

## 更新版本

执行：`npm version patch|mirror|major`

- major：代表主版本号，通常在需要提交不能向下兼容的情况下对该版本号进行升级
- minor：代表次版本号，通常在新增功能时才对该版本号进行升级
- patch：代表修复版本号，升级该版本号通常代表修复一些 bug，但没有新增功能或者存在不向下兼容的功能
