

import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

import Bio from './componentes/Bio'
import Card from './componentes/Card'
import imagemLivro from './assets/livro.png'
import imagemSnk from './assets/snk.gif'
import imagemFleabag from './assets/fleabag.jpg'
import imagemTrueBeauty from './assets/true-beauty.gif'

function App() {
  return (
    <>

      <Header></Header>
      <Bio></Bio>
      <Card titulo="It A coisa (livro)" imagem={imagemLivro} descricao="O livro It foi uma leitura que realizei em 2019 e se tornou um livro que levarei para vida. Nele é narrada a história de Bill, Richie, Stan, Mike, Eddie, Ben e Beverly  onde eles aprenderam o real sentido da amizade, do amor, da confiança e do medo. "></Card>
      <Card titulo="Shingeki no kyojin (anime)" imagem={imagemSnk} descricao="SNK é um anime de 2013, acompanho ele desde meados de 2014, em 2023 finalmente sairá a temporada final. Sinopse: Para escapar dos titãs, gigantes devoradores de homens, a humanidade se refugiou em cidades cercadas por enormes muralhas. Quando eles voltam a atacar, Eren Yeager se junta à luta para combater as criaturas.🤣🤣🤣🤣"></Card>
      <Card titulo="Fleabag (Série)" imagem={imagemFleabag} descricao="Fleabag é uma minissérie da amazon prime com apenas duas temporadas, Fleabag é um mergulho na mente fervilhante de uma mulher inteligente, sexual, inquieta e devastada pelo luto, em seu dia-a-dia na vida moderna de Londres"></Card>
      <Card titulo="True Beauty (Dorama)" imagem={imagemTrueBeauty} descricao="True Beauty é uma comédia romântica focada na personagem Ju-Kyung, uma adolescente que cresceu sendo maltratada por todos a sua volta por não ter nascido nos padrões de beleza impostos pela sociedade."></Card>
      <Footer></Footer>

    </>

  )

}

export default App
