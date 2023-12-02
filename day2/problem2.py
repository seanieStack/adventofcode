with open("input.txt", 'r') as f:
    input = f.readlines()

power_game = []
games = []

for line in input:
    games.append(line
                 .split(":")[1]
                 .replace(", ", ",")
                 .replace("; ", ",")
                 .strip()
                 .split(","))

for i, game in enumerate(games):
    max_red = 1
    max_green = 1
    max_blue = 1

    for turn in game:
        parts = turn.split(" ")
        count = int(parts[0])
        color = parts[1]

        match color:
            case "red":
                if count > max_red:
                    max_red = count
            case "green":
                if count > max_green:
                    max_green = count
            case "blue":
                if count > max_blue:
                    max_blue = count


print(sum(power_game))
