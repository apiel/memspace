# memspace

Memspace is RESTful shared memory. There you can define route, permission, users...

Authenticcation:
http://127.0.0.1:3000/api/auth?memspace=test&username=alexandre.piel@gmail.com&password=password

Get user information:
http://127.0.0.1:3000/api/auth/me?memspace=test&sessionId=cc49c50a5cb675968caf60ea89466f2eb12492c45b4edb2bfd3b4d14248ee9610373915baa03b195a274f6f781814e0801e19ffa7630d999a9ef9ae78f414943

Get data "abc"
http://127.0.0.1:3000/api/data/abc?memspace=test&sessionId=cc49c50a5cb675968caf60ea89466f2eb12492c45b4edb2bfd3b4d14248ee9610373915baa03b195a274f6f781814e0801e19ffa7630d999a9ef9ae78f414943

