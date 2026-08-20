class Pessoa:
    def __init__(self, nome, idade, email):
        self.nome = nome
        self.idade = idade #nao pode ser negativo
        self.email = email

        if self.idade < 0:
            raise ValueError("A idade não pode ser negativa.")

        def aniversario(self):
            self.idade += 1 #adiciona 1 ano a idade da pessoa

        def exibir_informacoes(self):
            print(f"Nome: {self.nome}")
            print(f"Idade: {self.idade}")
            print(f"E-mail: {self.email}")
class Curso:
    def __init__(self, nome, alunos):
        self.nome = nome
        self.alunos = alunos

        def adicionar_aluno(self, aluno):
            self.alunos.append(aluno)

        def listar_alunos(self):
            for aluno in self.alunos:
                aluno.exibir_dados_do_aluno()

class Aluno(Pessoa):
    def __init__(self, nome, idade, email, matricula, curso):
        super().__init__(nome, idade, email)
        self.matricula = matricula
        self.curso = curso


ADS = Curso("ADS", [Aluno("Bruno", 20, "bruno@gmail.com", "12345", "ADS"), Aluno("Henrique", 21, "henrique@gmail.com", "12346", "ADS"), Aluno("Rodrigues", 22, "rodrigues@gmail.com", "12347", "ADS")])

QUIMICA = Curso("Química", [Aluno("Bruno", 20, "bruno@gmail.com", "12345", "Química"), Aluno("Henrique", 21, "henrique@gmail.com", "12346", "Química"), Aluno("Rodrigues", 22, "rodrigues@gmail.com", "12347", "Química")])

print(f"Curso: {ADS.nome}")
print(f"Curso: {QUIMICA.nome}")