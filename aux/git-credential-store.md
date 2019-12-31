# Git credential store
      
       http://manpages.ubuntu.com/manpages/precise/en/man1/git-credential-store.1.html
       
       The point of this helper is to reduce the number of times you must type your username or
       password. For example:

           $ git config credential.helper store
           $ git push http://example.com/repo.git
           Username: <type your username>
           Password: <type your password>

           [several days later]
           $ git push http://example.com/repo.git
           [your credentials are used automatically]