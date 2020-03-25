from app_folder import app
from flask import render_template

@app.route('/')
def home():
    myname = 'carlos' 
    mylist = ['carlos', 'jane', 'alex']
    return render_template('index.html', name=myname, names=mylist)