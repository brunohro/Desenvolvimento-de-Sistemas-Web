# Crie uma lista com 10 números inteiros.
# Escreva uma função que receba essa lista e retorne:
# O maior valor.
# O menor valor.
# A média dos valores.

lista = [5, 12, 3, 8, 20, 1, 15, 7, 9, 4]

def retornar_valores(lista):
    maior_valor = max(lista)
    menor_valor = min(lista)
    media = sum(lista) / len(lista)
    return maior_valor, menor_valor, media

exibir = retornar_valores(lista)
print(f"Maior valor: {exibir[0]}")
print(f"Menor valor: {exibir[1]}")
print(f"Média dos valores: {exibir[2]}")