#!/bin/bash
# Start Redis server
redis-server /usr/local/etc/redis/redis.conf &

# Run your script
/usr/local/bin/script/script_redis.sh & 

# Run Log
logrotate /usr/local/bin/logs/logrotate.conf 

# Keep the container running
tail -f /dev/null
