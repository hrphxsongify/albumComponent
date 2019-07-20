# Amazon EC2 Notes

`curl nvm`

`nvm install node`

`sudo yum update`

`sudo yum install git`

add mongodb-org to yum
<https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/>

`sudo yum install -y mongodb-org`

`sudo chkconfig mongod on`

`sudo systemctl start mongod`

`npm install -g pm2`

### These change...

`ssh -i "gosack.pem" ec2-user@ec2-35-163-250-185.us-west-2.compute.amazonaws.com`

`http://ec2-34-213-155-196.us-west-2.compute.amazonaws.com:1024`

//this is it
http://ec2-34-213-155-196.us-west-2.compute.amazonaws.com:1024/api/albums/4

http://ec2-35-163-250-185.us-west-2.compute.amazonaws.com:1024/api/albums/4

`http://ec2-35-163-250-185.us-west-2.compute.amazonaws.com:1024`

nodemon replacement
`pm2 start server.js`

`pm2 startup`

copy the environment variables listed to the command line and execute

`pm2 save`

add aws imnbound rule for the designated port
