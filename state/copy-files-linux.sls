create-directory:
  file.directory:
    - user: root
    - name: /etc/bolt
    - group: root

copy-file:
  file.managed:
    - source: salt://getApps.js
    - name: /etc/bolt/getApps.js
    - user: root
    - group: root