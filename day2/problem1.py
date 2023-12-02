with open("input.txt", 'r') as f:
    input = f.readlines()

invalid_games = []
possible_game = list(range(1, 100))
games = []

for line in input:
    games.append(line
                 .split(":")[1]
                 .replace(", ", ",")
                 .replace("; ", ",")
                 .strip()
                 .split(","))

for i, game in enumerate(games):

    for turn in game:
        parts = turn.split(" ")
        count = int(parts[0])
        color = parts[1]

        match color:
            case "red":
                if count > 12:
                    invalid_games.append(i + 1)
                    break
            case "green":
                if count > 13:
                    invalid_games.append(i + 1)
                    break
            case "blue":
                if count > 14:
                    invalid_games.append(i + 1)
                    break

possible = [game for game in possible_game if game not in invalid_games]

print(sum(possible))

