with open("input.txt", 'r') as f:
    input = f.readlines()

output = []
for line in input:
    output.append("".join(c for c in line if not c.isalpha() and c != '\n'))

print(sum(int(line[0] + line[-1]) for line in output))