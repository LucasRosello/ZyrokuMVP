echo '                 _             _                 _             _   _               '
echo '  __ _   _   _  | |_    ___   (_)  _ __    ___  | |_    __ _  | | | |   ___   _ __  '
echo ' / _` | | | | | | __|  / _ \  | | | `_ \  / __| | __|  / _` | | | | |  / _ \ | `__| '
echo '| (_| | | |_| | | |_  | (_) | | | | | | | \__ \ | |_  | (_| | | | | | |  __/ | |    '
echo ' \__,_|  \__,_|  \__|  \___/  |_| |_| |_| |___/  \__|  \__,_| |_| |_|  \___| |_|    '
echo ""

sleep 1



apt update

#wget
apt install software-properties-common apt-transport-https wget -y

#apache2
apt install apache2 -y
chmod -R 777 /var/www/html
rm /var/www/html/index.html

#Mongo
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list
apt-get update
apt-get install -y mongodb-org
systemctl start mongod
systemctl status mongod
