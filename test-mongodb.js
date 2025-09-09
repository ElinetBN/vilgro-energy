// test-mongodb.js
require('dotenv').config({ path: '.env.local' })
const mongoose = require('mongoose')

async function testConnection() {
  try {
    console.log('🔍 Testing Vilgro Energy MongoDB Connection...')
    console.log('Database Name:', process.env.DB_NAME)
    console.log('MongoDB URI:', process.env.MONGO_URI ? 'Found ✅' : 'Not found ❌')
    console.log('Node Environment:', process.env.NODE_ENV)
    
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not found in environment variables')
    }

    console.log('\n⏳ Connecting to MongoDB Atlas...')

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })

    console.log('✅ Successfully connected to MongoDB!')
    console.log('Connection state:', mongoose.connection.readyState) // 1 = connected
    console.log('Database name:', mongoose.connection.name)
    console.log('Host:', mongoose.connection.host)
    console.log('Port:', mongoose.connection.port)

    // Test a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('Available collections:', collections.map(c => c.name))

    // Test write operation (optional)
    const testCollection = mongoose.connection.db.collection('connection_test')
    const testDoc = await testCollection.insertOne({ 
      message: 'Connection test successful', 
      timestamp: new Date() 
    })
    console.log('Test document inserted with ID:', testDoc.insertedId)

    // Clean up test document
    await testCollection.deleteOne({ _id: testDoc.insertedId })
    console.log('Test document cleaned up')

    console.log('\n🎉 MongoDB connection test completed successfully!')

  } catch (error) {
    console.log('❌ MongoDB connection failed:')
    console.error('Error:', error.message)
    
    if (error.name === 'MongoServerSelectionError') {
      console.log('\n💡 Possible solutions:')
      console.log('1. Check if MongoDB is running')
      console.log('2. Verify your connection string')
      console.log('3. Check network connectivity')
      console.log('4. Verify database credentials')
      console.log('5. Make sure your IP is whitelisted in MongoDB Atlas')
    }
  } finally {
    // Close the connection
    await mongoose.connection.close()
    console.log('Connection closed')
    process.exit(0)
  }
}

testConnection()