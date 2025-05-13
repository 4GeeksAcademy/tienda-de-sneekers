from flask import Flask, jsonify
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

@app.route("/api")
def hello():
    print(os.getenv("URL"))
    return jsonify(message="Hello from Flask!")

if __name__ == "__main__":
    app.run(debug=True)
