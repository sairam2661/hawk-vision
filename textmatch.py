#Need to do preprocessing
#Generalize generation of graphs

from difflib import SequenceMatcher
import numpy as np
import matplotlib.pyplot as plt
import math

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

plt.style.use('ggplot')

def preprocessing(text):
    text = text.lower()
    return text

a = "I like apples."
b = "Apples I like."         #50% Plagiarism
c = "I love apples."         #85% Plagiarism
d = "Apples are liked by me" #38% Plagiarism

#seq = SequenceMatcher(None, a, b)
##seq = SequenceMatcher(None, a, d)
#print((seq.ratio()))

student_list = [a, b, c, d] 
comparision_list = []

n = 4

for one in student_list:
    comparision_person = []
    for others in student_list:
        ratio = 0
        seq = (SequenceMatcher(None, one, others))
        ratio = seq.ratio()
        ratio = float(ratio) * 100
        ratio = truncate(ratio, 3)
        comparision_person.append(ratio)
    comparision_list.append(comparision_person)

for lst in comparision_list:
    print(lst)


students = ['19X201', '19X202', '19X203', '19X204']
angles=np.linspace(0,2*np.pi,len(students), endpoint=False)
#print(angles)

angles=np.concatenate((angles,[angles[0]]))
#print(angles)

s19X201 = comparision_list[0]
s19X202 = comparision_list[1]
s19X203 = comparision_list[2]
s19X204 = comparision_list[3]

students.append(students[0])
s19X201.append(s19X201[0])
s19X202.append(s19X202[0])
s19X203.append(s19X203[0])
s19X204.append(s19X204[0])


fig=plt.figure(figsize=(6,6))
ax=fig.add_subplot(polar=True)#basic plot
ax.plot(angles,s19X201, 'o-', color='g', label='19X201')

#fill plot
ax.fill(angles, s19X201, alpha=0.25, color='g')

#Add labels
ax.set_thetagrids(angles * 180/np.pi, students)
ax.set_theta_offset(np.pi / 2)
ax.set_theta_direction(-1)
plt.grid(True)
plt.tight_layout()
plt.legend()
plt.show()

fig=plt.figure(figsize=(6,6))
ax=fig.add_subplot(111, polar=True)

#19X201
ax.plot(angles,s19X201, 'o-', color='g', linewidth=1, label='19X201')
ax.fill(angles, s19X201, alpha=0.25, color='g')

#19X202
ax.plot(angles,s19X202, 'o-', color='orange', linewidth=1, label='19X202')
ax.fill(angles, s19X202, alpha=0.25, color='orange')

ax.set_thetagrids(angles * 180/np.pi, students)
ax.set_theta_offset(np.pi / 2)
ax.set_theta_direction(-1)
plt.grid(True)
plt.tight_layout()
plt.legend()
plt.show()

'''

A, B
C, D, E
F, G, H, I, J

'''

'''
1. To check code
2. To check only text files
3. To check text files with images
'''