# Dada a lista de nomes ["Ana", "Bruno", "Carlos", "Ana", "Bruno", "Ana"],
# crie um dicionário que mostre quantas vezes cada nome aparece.
# Extra: transforme em uma list comprehension que retorna apenas os nomes que aparecem mais de uma vez.

lista_de_nomes = ["Ana", "Bruno", "Carlos", "Ana", "Bruno", "Ana"]

# Criando o dicionário com a contagem de cada nome
contagem_nomes = {}
for nome in lista_de_nomes:
    if nome in contagem_nomes:
        contagem_nomes[nome] += 1
    else:
        contagem_nomes[nome] = 1

# Extra: transforme em uma list comprehension que retorna apenas os nomes que aparecem mais de uma vez
nomes_repetidos = [nome for nome, count in contagem_nomes.items() if count > 1]


print("Contagem de nomes:", contagem_nomes)