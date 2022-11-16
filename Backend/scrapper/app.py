import json
from flask import Flask, request
import Backend.scrapper.scrapper as scrapper 

app = Flask(__name__)

@app.route('/')
def index():
    return "hello World - > From C-Secure"


@app.route('/get')
def get():
    data = request.data
    # convert raw data to dict
    data = json.loads(data)
    
    # scrapper.get(data['url'])

    return scrapper.get(data['url'])