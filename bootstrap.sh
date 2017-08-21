echo "Installing Bluefish"
sudo apt-get install -y bluefish

echo "Installing npm modules"
npm install

echo "Removing old profile"
sudo cp .profile ~/.profile
