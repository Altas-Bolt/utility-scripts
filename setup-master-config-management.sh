# copy files from the state folder

# create file server folder
mkdir -p /srv/salt

# copy all state files to the file server
cp -r state/* /srv/salt/
