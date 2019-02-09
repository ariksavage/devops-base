# Project Base

## Setup
1. Clone the repo
  - host$ `git clone git@github.com:ariksavage/devops-base.git Development`
  - host$ `cd Development`
2. Initialize submodules
  - host$ `git submodule init`
3. Update submodules
  - host$ `git submodule update --recursive --remote`
4. Set up the vagrant.config.json
  - Copy vagrant/example-vagrant.config.json to config/vagrant.config.json
  - Enter Project information into the vagrant.config.json
5. Vagrant up
  - host$ `cd vagrant`
  - host$ `vagrant up`
6. Change git remote
  - host$ `cd ..`
  - host$ `git status`
  - host$ `git remote -v`
  - host$ `git remote set-url origin git@github.com:USERNAME/REPOSITORY.git`
