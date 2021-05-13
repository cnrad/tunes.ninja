module.exports = {
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=840585628408217610&scope=bot&permissions=19456",
        permanent: true,
      },
    ];
  },
};
