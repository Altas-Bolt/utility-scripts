# create file server folder
mkdir -p /srv/salt

# copy all state files to the file server
cp -r state/* /srv/salt

# copy remade config file
cp config/master /etc/salt/master

# restart salt-master service
service salt-master restart

# win-repo get
salt-run winrepo.update_git_repos