Explicação da configuração e execução do código (Front-End):

Linguagem utilizada: Javascript -> Resolvi utilizar essa linguagem pois ela oferece as melhores opções se falando de tecnologias para desenvolvimento Front-End.

Tecnologia utilizada: Biblioteca React -> Escolhi esta biblioteca pois ao meu entender, ela é a ferramenta mais intuitiva e prática para se aprender e desenvolver aplicações simples e complexas.

Outras ferramentas utilizadas: Nesse projeto utilizei diversas ferramentas do React como as bibliotecas Router para configuração de rotas, UseState e useEffect para configurações de mudança de estado e Fetch API para fazer requisições para o Back-End.

Forma de Comunicação com o banco de dados TMDB: através da fetch API, eu fiz requisições HTTP para endpoints que eu criei no Back-End para conseguir obter informação da API do TMDB.

Execução do Código:

Neste projeto eu criei uma interface de lista de filmes que fornece cards contendo informações sobre filmes contidas na API.

Navbar: Para desenvolver a navbar eu utilizei um componente que contém um link atrelado a um ícone no início que serve para ir até a página de home. Além disso, dou outro lado da navbar está um form com um input e um button, os dois executam uma pesquisa se caso executados(o input utilizando enter e o button apenas clicando) que irá procurar na API filmes que possuo dados semelhantes ao que foi escrito no input, isso é possível realizando um fetch GET e a URL fornecida pelo Back-End para fazer consultas na api do TMDB. E por último, existem um button no final da navbar que tem a função de levar o usuário para a página de favoritos, onde estão localizados todos os filmes que foram favoritados pelo usuário.

Card de Filmes: Para mostrar os filmes nessa aplicação eu resolvi representá-los por meio de cards, para criar esses cards eu criei um componente chamada MovieCard que recebe os dados de um filme e monta o card a partir desses dados, dentro do card existem duas ferramentas, uma é o botão DETALHES, que ao ser apertado, leva o usuário para uma página que fornece mais informações sobre o filme em questão e a outra ferramenta é um marcador que serve para favoritar ou desfavoritar o filme em questão, esse marcador ao ser clicado, executa uma função que verifica se o id do filme está no banco de dados do Back-End que guarda os IDs dos filmes favoritos, caso esteja, significa que o marcador estava preenchido e o filme já é um dos favoritos, ou seja, ao clicar no marcador, a pessoa setou que o filme fosse retirado dos favoritos e assim é executado um código com fetch API e uma URL do Back-End que deletam o filme da lista de favoritos, agora se o ID do filme não existia na lista de favoritos, quer dizer que o usuário gostaria de setar aquele filme como favorito, então outro código com fetch utilzando uma requisição POST é ativado e cadastra aquele ID na lista de favoritos, o marcador de forma quando clicado, podendo estar vazio quando o filme não é favorito e preenchido quando o filme é um favorito. Detalhe: é preciso apertar duas vezes do marcador para a animação ocorrer pois como utilizei um e.preventDefault() na função que ele executa para que a tela não fosse recarregada sempre que um marcador fosse ativado, acaba sendo necessário apertar uma segunda vez rapidamente para ter a animação, porém apertando uma vez já é o suficiente para marcar o filme e se caso o usuário carregar a página, aquele marcador aparecerá já modificado. Essa lógica do card se aplica em quase toda a aplicação.

Rotas: No Index.js, eu utilizei 'Routes' e 'Route' para criar as rotas para os links utilizados na minha aplicação saberem para onde levar o usuário quando o mesmo ativar o link.

Grid de Filmes: Em todas as telas da aplicação em que são mostrados filmes, ele sempre aparecem ordenados em linhas de 3 filmes cada, pois foi dessa forma que eu setei no css, para que assim não tenha tanta informação junta em apenas uma linha, para isso foram utilizadas funções como Justify-Content e Flex-Wrap. 

Tela de Home: Nesta tela se localizam os filmes mais bem avaliados, os dados são recolhidos do Back-End por meio de uma requisição GET de uma função fetch que recebe sempre um array de até 20 objetos com os dados dos filmes, esses objetos são lançados em uma função map que lê cada um deles e joga em um componente MovieCard para seja criado um card daquele filme, após isso esses cards são apresentado na tela ordenadamente.

Tela de Search: Essa tela é gerada quando é feita alguma pesquisa no input localizado na navbar, quando a função submit dele é executada, ele faz a busca no Back-End que retorna um array de até 20 objetos com dados semelhantes a pesquisa, monta cards com esses dados através do componte MovieCard e a função map e os distribui na tela para o usuário.  

Tela de favoritos: Nesta tela, ao ser carregada é executada uma função com fetch para recolher os IDs dos filmes favoritados, depois é executada outra função para trazer todos os dados de cada um dos IDs e são formados os cards com eles e apresenta na tela.

Tela de Filme: Esta é a tela gerada sempre que o usuário clica no botão detalhes dos cards de algum filme, nessa página são mostradas informações como título, tagline, descrição, orçamento, bilheteria e nota que o filme possui no TMDB.

Essa é basicamente a explicação das fuuncionalidades e configurações do site.