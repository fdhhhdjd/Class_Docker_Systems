export TZ=Asia/Ho_Chi_Minh

send_notification() {
    # Log the timestamp of the backup
    echo "$(date) - Log backup completed" >> /usr/local/bin/script/logs/log_script_redis_date.txt
}

while true; do
    # Date VN
    date=$(date +"%Y%m%d_%H%M%S")

    # Backup Data
    echo "Backing up data..."
    redis-cli -h $REDIS_HOST -a $REDIS_PASSWORD -p $REDIS_PORT BGSAVE

    # Logs time date backup
    send_notification


    # release data redis show byte done
    echo "Released $(redis-cli -h $REDIS_HOST -a $REDIS_PASSWORD -p $REDIS_PORT  MEMORY RELEASE $MEMORY_RELEASE_MAX --statistics | grep -oE "[0-9]+") bytes of memory" --- DONE
    
    # Time last backup
    timelastbackup=`redis-cli -h $REDIS_HOST -a $REDIS_PASSWORD -p $REDIS_PORT  LASTSAVE`

    # Restore Data from Dump File
    echo "Restoring data from dump file..."
    redis-cli -h $REDIS_HOST -a $REDIS_PASSWORD -p $REDIS_PORT -x set mykey < /data/dump.rdb


    # logrotate -f /usr/local/bin/logs/logrotate.conf
    logrotate /usr/local/bin/logs/logrotate.conf
    
    # Show Time last backup and date 
    echo $timelastbackup - $date    

    # 20 minutes
    sleep 1200
    # sleep 60
done