import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'
import { githubReleasesFilesAnalysis } from "./src/node/analysis/githubReleasesFilesAnalysis/index.js";
import { cloudflarePagesDownProxy } from "./src/node/proxy/cloudflarePagesDownProxy/index.js";
import { fileUrlTreeAnalysis } from "./src/node/analysis/fileUrlTreeAnalysis/index.js";
import { huggingFaceDatasetsAnalysis } from "./src/node/analysis/huggingFaceDatasetsAnalysis/index.js";
import { vercelDownProxy } from './src/node/proxy/vercelDownProxy/index.js';
import { netlifyDownProxy } from './src/node/proxy/netlifyDownProxy/index.js';
import { giteeReleasesFilesAnalysis } from './src/node/analysis/giteeReleasesFilesAnalysis/index.js';
import { githubReposAnalysis } from './src/node/analysis/githubReposAnalysis/index.js';
import { giteeReposAnalysis } from './src/node/analysis/giteeReposAnalysis/index.js';


/**
 * 站点配置文件，没有注释的选项如果不知道有什么作用不建议修改，有注释的选项可以根据注释修改
 * */
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['vuetify'],
      },
    },
  }),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  // 网站标题，标题颜色可在 src/client/css/main.css 中修改
  title: 'ILoveScratch 开源软件镜像站',
  // 网站的简介，有助于搜索引擎收录
  description: 'ILS 开源软件镜像站 - 提供各种开源软件的镜像下载服务，为用户提供快速、稳定的下载体验。',
  // 页面 <head> 标签内添加的额外标签。 不要修改/logo.png可以替换掉这个文件，删除logo.png会导致构建出错。
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 页面预加载，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // 简单来说就是，如果你的文件不多就可以打开这个选项，可以大大提高页面切换的速度，如果文件非常多就不建议打开。建议超过100个文件就不要打开这个选项。
  shouldPrefetch: false,
  // 主题配置 FileList 是 vuepress 的一个主题，文件展示的功能全部由这个主题提供。
  theme: FileList([
    {
      mountPath: "/",
      analysis: githubReleasesFilesAnalysis({ user: "ILoveScratch2", repository: "MOUNT" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/OpenList/OpenList",
      analysis: githubReleasesFilesAnalysis({ user: "OpenListTeam", repository: "OpenList" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/OpenList/Desktop",
      analysis: githubReleasesFilesAnalysis({ user: "OpenListTeam", repository: "OpenList-Desktop" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/OpenList/Mobile",
      analysis: githubReleasesFilesAnalysis({ user: "OpenListTeam", repository: "OpenList-Mobile" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/LTS",
      analysis: githubReleasesFilesAnalysis({ user: "2044-space-elevator", repository: "TouchFish" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/UI Remake",
      analysis: githubReleasesFilesAnalysis({ user: "pztsdy", repository: "touchfish_ui_remake" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/Astra",
      analysis: githubReleasesFilesAnalysis({ user: "ILoveScratch2", repository: "TouchFish-Astra" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/Plus (Source Code)",
      analysis: githubReposAnalysis({ user: "2044-space-elevator", repository: "TouchFishPlus" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/Pro (Source Code)",
      analysis: githubReposAnalysis({ user: "PigeonTechGroup", repository: "TouchFishPro" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
    {
      mountPath: "/TouchFish/More(Lite)",
      analysis: giteeReleasesFilesAnalysis({
        user: "xx2870",
        repository: "touchfish_more",
        direction: "desc"
      })
    },
    {
      mountPath: "/Cloud Studio Chat",
      analysis: githubReleasesFilesAnalysis({ user: "pztsdy", repository: "Cloud-Studio-Chat" , authorizationToken: process.env.githubToken,}),
      // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
      // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
      // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
      downProxy: netlifyDownProxy(),
    },
  ])
})
