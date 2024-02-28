from flask import Flask, jsonify
import db

app = Flask(__name__)

@app.route("/")
def hello():
    response = jsonify(db.employees())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response