## hadaly
### setup:
1. Setup autoenv
  ``echo "source `which activate.sh`" >> ~/.bashrc``
  ``source ~/.bashrc``
  (Change `.bashrc` to the appropriate rc file if applicable, e.g. zsh)
  This automatically enters the virtual environment and sets the app config to the development settings when cding into the project folder.
2. Install node modules
  `npm install`
3. Bundle files
  `npm run dev` (or `npm run prod` to minify js)
4. run server
  `python app.py`

To exit virtual env, `deactivate`

### contributing:
1. Add heroku remotes:
  `git remote add pro git@heroku.com:hadaly-pro.git`
  `git remote add stage git@heroku.com:hadaly-stage.git`
2. Now push code with:
  `git push pro master`
  `git push stage master`

### migrations:
- To make migrations:
  `python manage.py db migrate`
- To apply migrations (after creating or pulling new migrations)
  `python manage.py db upgrade`
- Similarly, to apply migrations on heroku:
  `heroku run python manage.py db upgrade --app [hadaly-stage/hadaly-pro]`
