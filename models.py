from app import db
 

class Company(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)
  size = db.Column(db.Integer, nullable=True)
  description = db.Column(db.String(100), default='')
  # icon, offices, private/public

  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return '<Company {0}>'.format(self.name)