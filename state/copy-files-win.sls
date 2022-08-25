create-directory:
  file.directory:
    - name: C://Windows/Bolt

create-directory-applist:
  file.directory:
    - name: C://Windows/Bolt/appListwindows

copy-file:
  file.recurse:
    - source: salt://appListWindows
    - name: C://Windows/Bolt
