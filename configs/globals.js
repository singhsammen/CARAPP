require('dotenv').config();  // Optional: use if you're using local environment variables

const configurations = {
  ConnectionStrings: {
    MongoDB: process.env.MONGODB_URI || "mongodb+srv://200549793:GpACWninUg6aO1PK@clusterone.kkj4s.mongodb.net/?retryWrites=true&w=majority&appName=clusterOne",  // Fallback URI
  },
  Authentication: {
    GitHub: {
      ClientId: process.env.GITHUB_CLIENT_ID || "Iv23liPXbjVcXqSwTaEY",  // Fallback Client ID
      ClientSecret: process.env.GITHUB_CLIENT_SECRET || "0a864b054d1d34528c8565a78f22f60d41de4791",  // Fallback Client Secret
      CallbackUrl: process.env.GITHUB_CALLBACK_URL || "https://localhost:3000/oauth/callback",  // Fallback Callback URL
    },
  },
};

module.exports = configurations;
