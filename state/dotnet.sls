dotnet:
  '4.8':
    full_name: 'Microsoft .NET Framework 4.8'
    installer: 'https://go.microsoft.com/fwlink/?LinkId=2085155'
    install_flags: '/q /norestart'
    {% if grains['cpuarch'] == 'AMD64' %}
    uninstaller: 'C:\Windows\Microsoft.NET\Framework64\v4.0.30319\SetupCache\v4.6.01590\Setup.exe'
    uninstall_flags: '/uninstall /x86 /x64 /q /norestart'
    {% else %}
    uninstaller: 'C:\Windows\Microsoft.NET\Framework\v4.0.30319\SetupCache\v4.6.01590\Setup.exe'
    uninstall_flags: '/uninstall /x86 /q /norestart'
    {% endif %}
    msiexec: False
    locale: en_US
    reboot: False