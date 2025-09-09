export const config = {
    mongodb: {
      uri: process.env.MONGO_URI!,
      dbName: process.env.DB_NAME || "vilgro-energy",
    },
    app: {
      port: process.env.PORT || 3000,
      nodeEnv: process.env.NODE_ENV || "development",
    },
  }
  
  // Validate required environment variables
  export function validateEnv() {
    const required = ["MONGO_URI"]
    const missing = required.filter((key) => !process.env[key])
  
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(", ")}`)
    }
  }
  