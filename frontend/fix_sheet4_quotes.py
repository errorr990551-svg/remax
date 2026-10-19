with open('src/assets/data/sheet4MetaData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix unescaped 1/2" to 36"
fixed = content.replace('Sizes 1/2" to 36"', 'Sizes 1/2\\" to 36\\"')
fixed = fixed.replace('Sizes 1/2" to 24"', 'Sizes 1/2\\" to 24\\"')

with open('src/assets/data/sheet4MetaData.js', 'w', encoding='utf-8') as f:
    f.write(fixed)

print("Fixed unescaped quotes in sheet4MetaData.js")
