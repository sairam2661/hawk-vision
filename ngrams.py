from nltk import ngrams

#Include error handling for k < 0
def create_ngrams(sentence, k):
  return ngrams(sentence.split(), k)

sentence = 'this is a foo bar sentences and i want to ngramize it'

n = 6
sixgrams = create_ngrams(sentence, n)

for grams in sixgrams:
  print(grams)