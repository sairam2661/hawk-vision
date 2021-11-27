#Need to do preprocessing
#Generalize generation of graphs
#Try a real dataset for geneating the graphs
#Find different graphs for visualizing the information

from difflib import SequenceMatcher
import numpy as np
#import matplotlib.pyplot as plt
import math
import csv

def truncate(number, decimals=0):
    """
    Returns a value truncated to a specific number of decimal places.
    """
    if not isinstance(decimals, int):
        raise TypeError("decimal places must be an integer.")
    elif decimals < 0:
        raise ValueError("decimal places has to be 0 or more.")
    elif decimals == 0:
        return math.trunc(number)

    factor = 10.0 ** decimals
    return math.trunc(number * factor) / factor

#plt.style.use('ggplot')

def preprocessing(text):
    text = text.lower()
    return text

a = "I like apples."
b = "Apples I like."         #50% Plagiarism
c = "I love apples."         #85% Plagiarism
d = "Apples are liked by me" #38% Plagiarism

sentence1 = "My name is Guna. I am an Indian who studies in PSG College of Technology. I am a 3rd year in the IT department. I love web development and aim to be a full stack web developer over these holidays. I hope Rajith replies to my message one day. I am a Virat Kohli fan and I hate Rohit Sharma. I hope India keeps Kohli as the captain and not that stupid hitman. My favourite subject in my current semester are DAA and IoT."
sentence2 = "Guna is my name. I am a student at PSG College of Technology and am from India. In the IT department, I am in my third year. I enjoy web development and plan to work as a full stack web developer during the holidays. I'm hoping Rajith will respond to my message at some point. I support Virat Kohli and despise Rohit Sharma. I hope India keeps Kohli as captain instead of that dunderhead. DAA and IoT are my current semester's favourite subjects."

seq = SequenceMatcher(None, sentence1, sentence2)
#seq = SequenceMatcher(None, a, d)
print((seq.ratio()))

seq = SequenceMatcher(None, sentence1, sentence1)
#seq = SequenceMatcher(None, a, d)
print((seq.ratio()))

student_list = [a, b, c, d] 
comparision_list = []
students = ['19X201', '19X202', '19X203', '19X205']
comparision_list.append(['Students'] + students)

n = 4

for one in student_list:
    comparision_person = []
    current = student_list.index(one)
    comparision_person.append(students[current])
    for others in student_list:
        ratio = 0
        seq = (SequenceMatcher(None, one, others))
        ratio = seq.ratio()
        ratio = float(ratio) * 100
        ratio = truncate(ratio, 3)
        comparision_person.append(ratio)
    comparision_person[current + 1] = truncate(0, 3)
    comparision_list.append(comparision_person)

for lst in comparision_list:
    print(lst)

with open("similarity.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(comparision_list)
