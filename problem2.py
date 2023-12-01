input = []
with open("input.txt", 'r') as f:
    input = f.readlines()

stringNums = {
    "one" : '1',
    "two" : '2',
    "three" : '3',
    "four" : '4',
    "five": '5',
    "six" : '6',
    "seven" : '7',
    "eight" : '8',
    "nine" : '9' 
}

cleaned_input = []
for line in input:
    for key, value in stringNums.items():
        line = line.replace(key, value)
    cleaned_input.append(line.strip('\n'))

output = []
for line in cleaned_input:
    output.append("".join(c for c in line if not c.isalpha()))
sum = 0
for line in output:
    sum += int(line[0] + line[-1])

print(sum)


