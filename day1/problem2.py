with open("input.txt", 'r') as f:
    input = f.readlines()

stringNums = {
    "one": 'o1e',
    "two": 't2o',
    "three": 't3e',
    "four": 'f4r',
    "five": 'f5e',
    "six": 's6x',
    "seven": 's7n',
    "eight": 'e8t',
    "nine": 'n9e'
}

cleaned_input = []
for line in input:
    for key, value in stringNums.items():
        line = line.replace(key, value)
    cleaned_input.append(line.strip('\n'))

output = []
for line in cleaned_input:
    output.append("".join(c for c in line if not c.isalpha()))

sum = sum(int(line[0] + line[-1]) for line in output)

print(sum)
