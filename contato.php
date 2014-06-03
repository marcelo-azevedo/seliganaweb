<?php
include_once("inc/header.php");
?>
  <section id="pg-internas" ng-controller="MainCtrl">

    <?php include_once("inc/menu.php");?>

    <section id="contato">
      <section class="coluna-esquerda">
        <header class="header-sections">
          <h1><span>con</span>tato</h1>
          
        </header>
        
        <p class="sub-titulo"><span>Preencha o formulário abaixo, conte-nos como você quer ver sua marca. Retornaremos em breve.</span> Pra ligar você e sua marca ao mundo, de um jeito único.</p>

        <form>
          <label for="">
            <input type="text" name="" id="" placeholder="Seu nome">
          </label>
          <label for="">
            <input type="text" name="" id="" placeholder="Empresa">
          </label>
          <label for="">
            <input type="text" name="" id="" placeholder="URL da Empresa">
          </label>
          <label for="">
            <input type="text" name="" id="" placeholder="Telefone preferencial (00) 0000-0000">
          </label>
          <label for="">
            <textarea name="" id="" placeholder="O que podemos fazer por sua marca?" cols="30" rows="10"></textarea>
          </label>
          <label for=""><input type="submit" value="Enviar"></label>
        </form>

      </section>
      <!-- coluna-esquerda -->

      <aside id="aside-direita">
        <span class="selo-contato">Se liga e vem com agente!</span>
        <p>Faça parte <span>da liga.</span></p>
        <small>Preencha o formulário abaixo, <br />conte-nos como você quer ver sua <br />marca.</small>
        
        <a href="#">Selecione</a>

        <section class="redes-sociais">
          <small>A liga nas <span>Redes Sociais</span></small>
          <a href="https://www.facebook.com/seliganaweb" class="facebook">facebook</a>
          <a href="#" class="likedin">likedin</a>
          <a href="https://twitter.com/seliga_naweb" class="twitter">twitter</a>
          <a href="#" class="youtube">youtube</a>
        </section>
      </aside>
      <!-- aside-direita -->

    </section>
    <!-- #contato -->

  </section>
  <!-- #pg-internas -->

<?php
include_once("inc/footer.php");
?>

