import pickle
pickled_model = pickle.load(open('model.pkl', 'rb'))
pickled_vec=pickle.load(open("vectorizer.pickle", 'rb'))
import helpers.getComments as scrapper

data = 'https://www.youtube.com/watch?v=O_WbmIIy4vk'

comments =  scrapper.get(data)

# # Actual Model Code Here
res = []
for comment in comments:
    inp = pickled_vec.transform([comment]).toarray()
    result=pickled_model.predict(inp)
    dic={}
    dic['sentiment']= result
    dic['comment']= comment
    res.append(dic)

print(res)