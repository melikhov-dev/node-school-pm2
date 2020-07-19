module.exports = {
  apps : [{
    script: 'server.js',
    watch: true,
    instances : "max",
    exec_mode : "cluster"
  }],
};
