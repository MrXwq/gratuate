# gratuate
毕业设计相关

### 20200310

#### 阿里云操作

账号：root

ls 查看当前文件夹的东西

pwa 查看当前的文件夹路径

cd / 进入根目录

ls -al 这个文件夹的一些文件

cd ~ 就会进入个人文件夹

#### 在本地

ssh root@公网地址

yes

然后就可以和阿里云操作一致

#### 解析域名

把公网地址解析到域名那，ssh root@域名，这样也可以

#### Nginx 安装和配置

apt show nginx 看看有没有，没用

apt update 应该先全部更新一下软件包

apt install nginx -y

#### 安装mongodb

apt install -y mongodb-server

mongo直接进入

show dbs 查看数据库

exit 退出

#### git安装、配置ssh-key

apt install -y git

让git可以拉这个本地代码

ssh-keygen

将这个配到git上去

cat /root/.ssh/id_rsa.pub

#### 配置node和淘宝镜像

apt install -y node.js

apt install -y npm

npm config set registry https://registry.npm.taobao.org

npm i -g nrm

npm i -g n //这个包可以升级node本身

n //看看指令

n latest //使用最新的 这里卡住了，然后我apt remove node.js 再node -v就变最新的了。。。

#### 添加部署deploy key公钥

cd /

ll

cd /var/www

ls

cd html

ls

mkdir /data 在根目录建一个data文件

cd /data

ls看看有哪些东西

ll竖着看看有什么，还能显示隐藏文件

#### 解决node安装失败

```javascript
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 安装pm2，启动项目

npm i -g pm2

pm2 start index.js 这样就启用了，而且不会占用空间

pm2 ls 可以看看我们目前有多少个进程

pm2 logs index 可以看看我们的输出

curl 请求一个地址

curl http://localhost:3000

 pm2 stop all 停止所有

#### 配置反向代理

在vscode下载remote-ssh就可以在我们

点击小电脑，里面设置选第一个

```
Host gratuate

  HostName gratuate.mrxwq.com

  User root
```

配置完之后点开右边小文件夹，就会连接服务器

点击打开文件夹进入/etc/nginx/ 新建一个文件

https://www.digitalocean.com/community/tools/nginx#?0.php=false&0.proxy&0.root=false 进到这个网站去生成一个配置

https先不启用

把生成的文件下载下来，然后sites-enabled、sites-available的文件放到对应的文件夹内，nginxconfig.io的文件夹复制过去

然后控制台输入 service nginx reload重载nginx配置文件

sites-enabled 里的内容为这个，但是不行，我把这个文件sites-available的内容给复制过来了../sites-available/gratuate.mrxwq.com.conf

#### 网站一直打不开

需要备案

#### 导出数据库

```
mongodump -d shop
```

把生成的dump文件复制到服务器/root/路径下

然后在控制台执行mongorestore

#### 每次提交完代码后

需要pm2 reload index （index是你启了服务的name）

#### 数据库的管理软件

Robo 3T 

#### 添加https，ssl证书

let't encrypt 每三个月需要去更新