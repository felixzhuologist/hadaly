import os

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS']) # set correct settings

db = SQLAlchemy(app)

@app.route('/')
def home():
  return render_template('home.html')

if __name__ == '__main__':
  app.run(debug=True)