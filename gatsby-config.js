module.exports = {
  siteMetadata: {
    title: `seolranlee`,
    description: `JavaScript를 베이스로 한 프론트엔드 개발자 이설란입니다.<br/>
    현재는 브레이브모바일의 O2O 서비스 숨고의 웹 프론트엔드챕터 팀원으로서 숨고의 신규 피처 개발 및 전반적인 서비스 운영을 맡고 있습니다.`,
    author: `안녕하세요.`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `contents`,
    //     path: `${__dirname}/contents`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: <https://gatsby.dev/offline>
    // `gatsby-plugin-offline`,
  ],
};
