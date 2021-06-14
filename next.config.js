module.exports = {
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=840585628408217610&permissions=19456&scope=bot%20applications.commands",
        permanent: true,
      },
      {
        source: "/vote",
        destination: "https://top.gg/bot/840585628408217610/vote",
        permanent: true
      },
      {
        source: "/support",
        destination: "https://discord.gg/bQGrm6xHj7",
        permanent: true
      }
    ];
  },
  target: "serverless",
};
