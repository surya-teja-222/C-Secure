import flask
import flask_cors
from flask import request, jsonify
import json
import helpers.getComments as scrapper

import pickle
pickled_model = pickle.load(open('model.pkl', 'rb'))
pickled_vec=pickle.load(open("vectorizer.pickle", 'rb'))

app = flask.Flask(__name__)

# Enable CORS
flask_cors.CORS(app)

@app.route("/")
def hello():
    return "Hello World!"


@app.route("/validate", methods=["GET","POST"])
def validate():
    try:
        data = request.data
        data = json.loads(data)['url']
    except:
        try:
            data = request.args['url']
        except:
            data = None
            return {'error': 'No data received'}, 400
    print(data)
    comments,names =  scrapper.get(data)
    
    # # Actual Model Code Here
    res = []
    for comment, idx in zip(comments,range(len(comments))):
        inp = pickled_vec.transform([comment]).toarray()
        result=pickled_model.predict(inp)
        dic={}
        dic['sentiment']= int(result[0])
        dic['comment']= comment
        dic['author'] = names[idx]
        # print(dic)
        res.append(dic)
    
    return jsonify(res),200



@app.route('/get-comments' , methods=['GET', 'POST'])
def get():
    try:
        data = request.data
        data = json.loads(data)['url']
    except:
        try:
            data = request.args['url']
        except:
            data = None
            return {'error': 'No data received'}, 400
    
    comments =  scrapper.get(data)
    return jsonify(comments)


if __name__ == "__main__":
    app.run(debug=True)