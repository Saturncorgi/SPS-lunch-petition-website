cd ~/website && \
rm -rf * && \
git clone https://github.com/Saturncorgi/SPS-lunch-petition-website.git && \
cd * && \
sudo docker build -t website . && \
sudo docker stop website && \
sudo docker rm website && \
sudo docker run -dit --name website -p 443:443 website