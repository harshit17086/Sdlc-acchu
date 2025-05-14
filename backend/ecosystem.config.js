module.exports = {
    apps: [{
      name: "kaitori-backend",
      script: "./dist/index.js",  // Note the ./ at the start
      cwd: "/var/www/kaitorimybyte/backend",  // Make sure this matches your exact path case
      env: {
        NODE_ENV: "production",
        PORT: 3001  // Adjust this to match your backend port
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production"
      }
    }]
  }