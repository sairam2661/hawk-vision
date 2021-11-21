import hashlib

def getHash(text):
    hash_value = hashlib.sha1((text).encode('utf-8'))
    hash_value = hash_value.hexdigest()
    return int(hash_value, 16)

sentence = "Quick brown fox"

print(getHash(sentence))
guna = ["Guna", "Mahesh"]
print(getHash(" ".join(guna)))
print(getHash("Guna Mahesh"))

