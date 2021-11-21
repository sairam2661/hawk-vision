import hashlib
from nltk import ngrams

#Include error handling for k < 0
def create_ngrams(sentence, k):
  return ngrams(sentence.split(), k)

'''sentence = 'this is a foo bar sentences and i want to ngramize it'

n = 6
sixgrams = create_ngrams(sentence, n)

for grams in sixgrams:
  print(grams)'''

#Getting has for given text
def getHash(text):
    hash_value = hashlib.sha1((text).encode('utf-8'))
    hash_value = hash_value.hexdigest()
    return int(hash_value, 16)

'''sentence = "Quick brown fox"

print(getHash(sentence))
guna = ["Guna", "Mahesh"]
print(getHash(" ".join(guna)))
print(getHash("Guna Mahesh"))
'''