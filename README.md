<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">通讯行程卡纪念版</h3>

## 项目说明
本项目基于 **Uni-APP** 框架开发，仅作纪念，无实际意义，不得用于防疫等相关场景！

## 参考来源
非常感谢各位前辈的开源项目，对本项目参考的来源表示由衷的感谢！！！

| 网站/项目       | 链接                             |
|-------------|--------------------------------|
| uniapp      | 	https://uniapp.dcloud.net.cn/ |
| vk-uview-ui | 	https://vkuviewdoc.fsq.pub    |
| …           | 	致敬各位大佬                        |

## 关于项目
作者博客：[https://blog.yxbug.cn/](https://blog.yxbug.cn/)

## 安装
```shell
yarn install
```

## 运行&发布
```shell
yarn run dev:%PLATFORM%
yarn run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：

|值|平台|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|h5|H5|
|mp-alipay|支付宝小程序|
|mp-baidu|百度小程序|
|mp-weixin|微信小程序|
|mp-toutiao|字节跳动小程序|
|mp-lark|飞书小程序|
|mp-qq|qq 小程序|
|mp-360|360 小程序|
|mp-kuaishou|快手小程序|
|mp-jd|京东小程序|
|mp-xhs|小红书小程序|
|quickapp-webview|快应用(webview)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-huawei|快应用华为|

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。
