---
layout: post
title:  Setting Up A Ruby-Rails-Postgres Dev Environment Locally with asdf on RHEL 8
date:   2022-12-22 15:06:35 -0600
categories: webdev rails postgres
---

There are an infinite number of ways to setup your dev environment.  Which way works for you depends on the types of projects you are working on, how many people are working on it with you, your development OS and to some extent what your deployment processes are.

What follows is a simple set of commands to get things going on a fresh RHEL 8 machine using an asdf driven install of your preferred versions of ruby, rails and postgres.:

```bash
#setup dependencies
sudo dnf install curl git openssl-devel zlib-devel readline-devel -y
sudo dnf groupinstall "Development Tools" -y

#get and setup asdf
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.1
echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc
echo ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc
source ~/.bashrc

#install requirements
asdf plugin add ruby
asdf install ruby 3.0.1
asdf global ruby 3.0.1
asdf plugin add nodejs && asdf plugin add yarn
asdf install nodejs latest && asdf install yarn latest
asdf global nodejs 16.2.0
asdf global yarn 1.22.10
gem install rails

#setup postgres and firewall
asdf plugin add postgres
asdf install postgres 13.3
asdf global postgres 13.3
sudo firewall-cmd --zone=public --add-port=5432/tcp --permanent
sudo firewall-cmd --reload
#for remote pgadmin management on local network
echo "listen_addresses = '*'" >> ~/.asdf/install/postgres/13.3/data/postgresql.conf
echo "host   all    192.168.0.0/24   trust" >> ~/.asdf/install/postgres/13.3/data/pg_hba.conf

```

For postgres there are also options for ssl, etc., but as this is for dev they may not be necessary (you can read all the options on [asdf-postgres github page](https://github.com/smashedtoatoms/asdf-postgres).  From that page, the following next steps to get going are:

```bash
~/.asdf/postgres/version/pg_ctl -D ~/.asdf/installs/postgres/version/data -l logfile start
createdb name
psql -d name
[[ to move data file around run pg_ctl stop, it will be in ~/.asdf/installs/postgres/version/data - restart with pg_ctl -D /where/ever/you/put/it start]]

```
