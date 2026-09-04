// 11.     Escreva uma função de validação de senha que retorna quais regras a senha não cumpre, entre: mínimo de 8 caracteres, ao menos uma letra maiúscula, ao menos um número.


function validarSenha(senha) {
    let erros = [];
    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    } if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter ao menos uma letra maiúscula.");
    } if (!/[0-9]/.test(senha)) {
        erros.push("A senha deve conter ao menos um número.");
    }
    return erros;
}

console.log(validarSenha("senha")); // retornar os 3 erros