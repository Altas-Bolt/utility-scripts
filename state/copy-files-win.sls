create-directory:
  file.directory:
    - name: C://Windows/Bolt

copy-file:
  file.managed:
    - source: salt://appListWindows
    - name: C://Windows/Bolt
