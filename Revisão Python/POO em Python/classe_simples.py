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

class Aluno(Pessoa):
    def __init__(self, nome, idade, email, matricula, curso):
        super().__init__(nome, idade, email)
        self.matricula = matricula
        self.curso = curso

    def exibir_dados_do_aluno(self):
        print(f"Nome: {self.nome}")
        print(f"Idade: {self.idade}")
        print(f"E-mail: {self.email}")
        print(f"Matrícula: {self.matricula}")
        print(f"Curso: {self.curso}")

class Curso(Aluno):
    def __init__(self, nome, alunos):
        self.nome = nome
        self.alunos = alunos

        def adicionar_aluno(self, aluno):
            self.alunos.append(aluno)

        def listar_alunos(self):
            for aluno in self.alunos:
                aluno.exibir_dados_do_aluno()

#questão 1
# Bruno = Pessoa("Bruno", 20, "bruno@gmail.com")
# Henrique = Pessoa("Henrique", 21, "henrique@gmail.com")
# Rodrigues = Pessoa("Rodrigues", 22, "rodrigues@gmail.com")

# print(f"Nome: {Bruno.nome}, Idade: {Bruno.idade}, E-mail: {Bruno.email}")
# print(f"Nome: {Henrique.nome}, Idade: {Henrique.idade}, E-mail: {Henrique.email}")
# print(f"Nome: {Rodrigues.nome}, Idade: {Rodrigues.idade}, E-mail: {Rodrigues.email}")

#questão 2
#BrunoH = Pessoa("BrunoH", -10, "brunoh@gmail.com") #vai dar erro, pois a idade é negativa

Bruno = Pessoa("Bruno", 20, "bruno@gmail.com")
Bruno.aniversario()
print(f"Nome: {Bruno.nome}, Idade: {Bruno.idade}, E-mail: {Bruno.email}")


