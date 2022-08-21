# Utility Scripts

### Commands useful
```sudo apt depends <package_name>   => Parsing is an issue will have to look into it```


### How to run setupCronJob.js NOT WORKING have to figure it out
```sudo node setupCronJob.js <username> <master_server_url>```

### How to add cron job:
```sudo crontab -e```
```*/15 * * * * curl <URL>```

### Policy for users
To authorise applications installation:
```sudo visudo``` => Edit the sudoers file
```<user> ALL = (root) <command>```

Example:
```testuser ALL = (root) /usr/bin/apt-get
testuser ALL = (root) /usr/bin/apt
testuser ALL = (root) /sbin/reboot```