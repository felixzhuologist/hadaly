## hadaly
### setup:
1. Setup autoenv
``echo "source `which activate.sh`" >> ~/.bashrc``
``source ~/.bashrc``
(Change `.bashrc` to the appropriate rc file if applicable, e.g. zsh)
This automatically enters the virtual environment and sets the app config to the development settings when cding into the project folder.
2. Install python modules
`pip install -r requirements.txt`
3. Install node modules
`npm install`
4. Bundle files
`npm run dev` (or `npm run prod`)
5. run server
`python app.py`

To exit virtual env, `deactivate`

### contributing:
Add heroku remotes:
`git remote add pro git@heroku.com:hadaly-pro.git`
`git remote add stage git@heroku.com:hadaly-stage.git`
Now push code with:
`git push pro master`
`git push stage master`
