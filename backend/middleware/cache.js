const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes default TTL

const cacheMiddleware = (duration = 600) => {
  return (req, res, next) => {
    // Skip cache for non-GET requests
    if (req.method !== 'GET') {
      return next();
    }

    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
      console.log(`Cache hit for ${key}`);
      return res.json(cachedResponse);
    }

    console.log(`Cache miss for ${key}`);
    
    // Store original send function
    const originalSend = res.json;
    
    // Override send function to cache response
    res.json = function(body) {
      if (res.statusCode === 200) {
        cache.set(key, body, duration);
      }
      originalSend.call(this, body);
    };

    next();
  };
};

const clearCache = (pattern) => {
  const keys = cache.keys();
  const matchedKeys = keys.filter(key => key.includes(pattern));
  
  matchedKeys.forEach(key => cache.del(key));
  console.log(`Cleared ${matchedKeys.length} cache entries for pattern: ${pattern}`);
};

module.exports = {
  cacheMiddleware,
  clearCache,
  cache
};