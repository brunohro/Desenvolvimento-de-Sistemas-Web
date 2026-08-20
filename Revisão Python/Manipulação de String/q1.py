# Escreva uma função que receba um texto e:
# Conte quantas vogais existem.
# Retorne o texto invertido.
# Verifique se o texto é um palíndromo


def analisar_texto(texto):
    vogais = "aeiouAEIOU"
    contador_vogais = sum(1 for char in texto if char in vogais)
    
    texto_invertido = texto[::-1]
    
    is_palindromo = False
    if texto.lower() == texto_invertido.lower():
        is_palindromo = True
    
    return contador_vogais, texto_invertido, is_palindromo


exibir = analisar_texto("A man a plan a canal")
print(f"Quantidade de vogais: {exibir[0]}")
print(f"Texto invertido: {exibir[1]}")
print(f"É palíndromo: {exibir[2]}")