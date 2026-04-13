module.exports = {
  apps: [
    {
      name: "parts-backend",
      script: "./server.js",

      // Environment
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },

      // Restart settings
      autorestart: true,
      watch: false, // 🔥 IMPORTANT: disable to avoid restart loop
      max_memory_restart: "300M",

      // Logging
      error_file: "./logs/error.log",
      out_file: "./logs/output.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      // Instances (optional)
      instances: 1,
      exec_mode: "fork"
    }
  ]
};
