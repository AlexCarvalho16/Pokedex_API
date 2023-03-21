window.onload = function()
{
    //Fazer a requisição. 
    var url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279"
    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function()
    {
        if(this.status >= 200 && this.status < 400)
        {
            var data = JSON.parse(this.response);
            $(function()
            {
                for(var i = 0; i < 151; i++)
                {
                    var paragrafo ='<p class="teste">'+ data['results'][i]['name']+'</p>';

                    controle = i + 1

                    var img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+controle+'.png';

                    // Criando os elementos no html para ser mostrado na tela.
                    $('.box_pokedex').append('<div id="'+data['results'][i]['name']+'" class="box_pokemon">'+paragrafo+'<img src="'+ img +'"></img>'+'<p class="numPokemon">'+controle+'</p></div>');
                }             
            })
        }
        else
        {
            console.log("Erro na conexão com a API" + this.status);  
        }
    }
    
    //Pesquisar o pokemon usando a barra!
    
    document.getElementById('pesquisar').addEventListener('click', function()
    {
        if(document.getElementById('nomePokemon').value == "")
        {
            for(i = 0; i < document.querySelectorAll('.box_pokemon').length; i++)
            {
                var pesquisa = document.getElementById('nomePokemon').value;
                
                if(document.querySelectorAll('.box_pokemon')[i].id != pesquisa)
                {
                    document.querySelectorAll('.box_pokemon')[i].style.display = "inline-block";
                }
            }
        }
        //Escrevi algo, o que vai acontecer ?????????
        else
        {
            pokemonEscolido = document.getElementById('nomePokemon').value;
            pokemonNoDocumento = document.getElementById(pokemonEscolido);
            //console.log(pokemonEscolido);
            //console.log(pokemonNoDocumento);

            if(pokemonNoDocumento == null) // Quando não existe esse pokemon
            {
                for(i = 0; i < document.querySelectorAll('.box_pokemon').length; i++)
                {                    
                    document.querySelectorAll('.box_pokemon')[i].style.display = "none";
                }
            }
            else // Quando existe
            {
                for(i = 0; i < document.querySelectorAll('.box_pokemon').length; i++)
                {                    
                    if(document.querySelectorAll('.box_pokemon')[i].id == pokemonNoDocumento.id)
                    {
                        document.querySelectorAll('.box_pokemon')[i].style.display = 'block'
                    }
                    else
                    {
                        document.querySelectorAll('.box_pokemon')[i].style.display = "none";
                    }
                }
                console.log(document.querySelectorAll('.box_pokemon'))
            }
        }
    })

    request.send();
}