const CONFIG = {
  // profile setting
  profile: {
    name: 'white8785.eth',
    image: '/959.png',
    discription: 'builder of all things',
    linkedin: 'jrwhite8785',
    email: 'white8785@protonmail.com',
    github: 'white8785',
    instagram: 'white8785.eth',
    art: 'https://oncyber.io/jr_',
    twitter: 'white8785',
    resume: 'https://white8785.com/resume',
  },
  projects: [
    {
      name: 'TheBlog',
      href: 'http://white8785.com'
    },
    {
      name: 'TheBlog2',
      href: 'http://white8785.com'
    }
  ],

  // blog setting
  blog: {
    title: 'the blog',
    description: 'welcome to the white8785 blog!',
  },

  // CONFIG configration
  link: 'https://white8785.com',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'Crypto', 'Blockchain'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = CONFIG