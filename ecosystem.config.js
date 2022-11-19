module.exports = {
  apps: [
    {
      name: "blog-front",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
