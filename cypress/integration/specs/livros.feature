@feature_livros
Feature: Livros

  @get_livros
  Scenario: (Get) Todos os livros
    When Eu procuro por todos os livros
    Then Deve retornar a resposta 'get_livros' status 200
    And Deveria retornar todos os livros
  