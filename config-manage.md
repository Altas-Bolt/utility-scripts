# Configuration management

To manage configuration:
master should have this added:
```
file_roots:
  base:
   - /srv/salt
file_server_backend:
  - roots
```

to apply state: sudo salt '*' state.apply <config_name>

config_name = file name of the .sls file