import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import unittest
#to data preprocessing
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

#NLP tools
import re
import nltk
import string
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from nltk.sentiment.vader import SentimentIntensityAnalyzer as VS

from gensim.test.utils import common_texts
from gensim.models.doc2vec import Doc2Vec, TaggedDocument

#train split and fit models
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

#model selection
from sklearn.metrics import confusion_matrix, accuracy_score

stopword=set(stopwords.words('english'))
stemmer = nltk. SnowballStemmer("english")

def clean(text):
    text = str(text). lower()
    text = re.sub('[.?]', '', text)
    text = re.sub('https?://\S+|www.\S+', '', text)
    text = re.sub('<.?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w\d\w', '', text)
    text = [word for word in text.split(' ') if word not in stopword]
    text=" ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text=" ".join(text)
    return text

S="Hey, bro How are you? Is everything alright love?"

class clean_UT(unittest.TestCase):
    def sum_ut(self):
        ans=100
        sum=40+60
        self.assertEqual(sum,ans)
 
    def clean_ut(self):
        ans="hey bro everyth alright love"
        S_clean=clean(S)
        self.assertEqual(S_clean, ans)
 
if __name__ == '__main__':
    unittest.main()