from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    response = jsonify({
        'employees': [
            {"first_name": "meow"}
        ]
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response