module.exports = {
  debug: true,
  viewloader: {
    cache: true,
    excludes: ['/ark'],
    policies: [
      {
        route: /^\/qqnews\/(.*)$/,
        remote: "https://news.qq.com/$1",
        handle: function (ctx, result, config) {
          if (result.type == "text/css") {
            return `.aa{padding: 0} ${result.content}`;
          } else if (result.type == "text/html") {
            return `<h1>这里是标题</h1> ${result.content}`;
          }
          return result.content;
        },
      },
      {
        route: "/abc",
        remote: "http://g.alicdn.com/evil-genius/pigeon-docs/0.0.7/tpl/atom-one-dark.css",
        handle: function (ctx, result, config) {
          return `.body{padding:0}${result.content}`;
        },
        refreshKey: {
          type: "diamond",
          dataId: 'cn-prize.viewloader.cache.version',
          group: 'eve',
        }
      },
      {
        route: /^\/local\/(.*)$/,
        remote: "/Users/cloudbeer/MyMD/$1",
        cache: true
      }
    ]
  }
};
