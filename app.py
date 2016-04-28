import os

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# app setup
app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])

# db setup
db = SQLAlchemy(app)
from models import Company


@app.route('/')
def home():
  return render_template('home.html')

if __name__ == '__main__':
  app.run(debug=True)