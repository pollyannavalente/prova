// Add more commands as shown. Don't mess where the DANGER is high.

jQuery(document).ready(function($) 
{
    var id = 1; //0 1 2 3 4 5 6 7 8 91011121314151617
    window.arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];// Keeps track of different commands(i.e., if they are completed or not)
                                    // 0 -> not completed
                                    // 1 -> completed 
                                    // added 1 more position
    var arr2 = ['git','init','commit','branch','checkout','add','merge','clone','pull','push','status','remote', 'log','fetch','tag', 'diff', 'blame', 'ls',  'clear',];
    //all the newly added commands must be updated in both the above arrays
    var task = ['[[b;#ff3300;]Não Completo]', '[[b;#44D544;]Completo]'];  // To print the task status
    
    var pwdv = ["lterm"]  // To print pwd 
    var s = [];   //Array for directories
    var f = [];   //Array for files
    var count = 6;    //Required to continue making sub directories
    var o = { "lterm": "0", "Documents": "1", "Downloads": "2", "Music": "3", "Pictures": "4", "Videos":"5" };  //Object to assign array of sub folders to a folder
    var of = { "hello.txt": "Hey there newbie!\nHaving fun? I hope so." };  //Object to assign text to a file
    f[0] = ["hello.txt"];
    s[0] = ["Documents", "Downloads", "Music", "Pictures", "Videos"];   //Array listing sub directories
    s[1] = []; f[1] = [];
    s[2] = []; f[2] = [];
    s[3] = []; f[3] = [];
    s[4] = []; f[4] = [];
    s[5] = []; f[5] = [];
    var index;  //Used in rm command to remove element from an array by using command splice

    $('body').terminal({
        help: function() {

            // Add the new commands to this list also.

            
            this.echo('Você acompanha os comandos que já\n')
            this.echo('analisou ou não através dos status:\n')
            this.echo('# Completo: comando já verificado\n')
            this.echo('# Não Completo: comando ainda não verificado \n\n')
            
            this.echo('\nLista de comandos disponíveis:');
            this.echo('===========================\n');
            this.echo('> git ------------ ' + task[arr[0]]);
            this.echo('> init ----------- ' + task[arr[1]]);
            this.echo('> commit --------- ' + task[arr[2]]);
            this.echo('> branch --------- ' + task[arr[3]]);
            this.echo('> checkout ------- ' + task[arr[4]]);
            this.echo('> add ------------ ' + task[arr[5]]);
            this.echo('> merge ---------- ' + task[arr[6]]);
            this.echo('> clone ---------- ' + task[arr[7]]);
            this.echo('> pull ----------- ' + task[arr[8]]);
            this.echo('> push ----------- ' + task[arr[9]]);
            this.echo('> status --------- ' + task[arr[10]]);
            this.echo('> remote --------- ' + task[arr[11]]);
            this.echo('> log ------------ ' + task[arr[12]]);
            this.echo('> fetch  --------- ' + task[arr[13]]);
            this.echo('> tag ------------ ' + task[arr[14]]);
            this.echo('> diff ----------- ' + task[arr[15]]);
            this.echo('> blame ---------- ' + task[arr[16]]);
            this.echo('> ls --------------' + task[arr[17]]);
            this.echo('> clear ---------- ' + task[arr[18]]);
            
            this.echo('\n');
        },
        git: function(){
            arr[0]=1;
            this.echo('> git é um sistema de versionamento, muito utilizado para \n'+
                     '> que seja possível armazenar o código de um sistema de maneira\n'+
                     '> remota e de facil acesso a todos os colaboradores envolvidos\n');
        },
       
        //rpc: 'some_file.php',
        init: function() {
            arr[1]=1;   
            
            this.echo("\n [[b;#ff3300;]git init] \n");
            this.echo('> Eh o comando que inicializa a comunicação da pasta local\n' +
                '> de seu projeto com o github.\n' +
                '> É onde inicia, literalmente todo o seu trabalho :)\n' +
                '> Podemos dizer que é o primeiro passo utilizando o github\n');
        },
        commit: function() {  
            arr[2] = 1;
            
            this.echo("\n [[b;#ff3300;]git commit] \n");
            
            this.echo('> Um commit é um grupo de alterações no código. Toda vez que,\n' +
                      '> você quiser "salvar" as alterações feitas por você no \n' +
                      '> repositório, você commita essas mudanças.\n' +
                      '> Um commit contém as alterações que foram feitas nele e \n'+
                      '> e uma mensagem descritiva, além de informações meta.' );
            this.echo('\n\n'+
                     '[[b;#FFF;]Criando um commit]\n\n'+
                     'Esteja na pasta do repositório\n'+
                     'Use o comando: \n[[b;#FFF;]git add {arquivos a serem add ao commit}]\n'+
                      'Use o comando: \n[[b;#FFF;]git commit -m {mensagem}]\n\n'
                      
                     );
        },
        branch: function() {
           arr[3] = 1;
            this.echo('\n[[b;#ff3300;]git branch]\n'); 
            
            this.echo('>Branches são separações de código.\n'+
                      '>O branch padrão do projeto é o master.\n' +
                      '>Branches normalmente são utilizados para separar alterações\n'+
                      '>grandes ou novas funcionalidades do projeto.\n\n' +
                      'É possível vermos as branches locais:\n'+
                      '[[b;#FFF;]git branch]\n'+                      
                      'Branches remotas:\n' +
                      '[[b;#FFF;]git branch -r]\n'+
                      'Ou listar todas:\n' +
                      '[[b;#FFF;]git branch -a]\n'+
                      '\nPara criar uma nova branch o contexto é o seguinte:\n' +
                      '[[b;#FFF;]git branch {nome}]\n'+
                      'Para excluirmos uma branch:\n' +
                      '[[b;#FFF;]git branch -D {nome}]\n\n'+
                      'Para navegarmos entre branches é necessário a utilização \n' +
                      'do comando checkout. Para saber mais é só digitar checkout\nno terminal e você vai descobrir como usa-lo\n'
                     )
        },

        checkout: function() {
            arr[4]=1;
            
            this.echo("\n [[b;#ff3300;]git checkout {}]\n\n"+
                     "> O comando checkout é utilizado para mudarmos um estado\n"+
                      "> servido para mudar de branch ou de versão do github, por ex \n\n" +
                      'Caso queira mudar a versão do seu github:\n' +
                      '[[b;#FFF;]git checkout v{XX}]\n'+
                      
                      'Caso queira mudar a sua branch atual:\n' +
                      '[[b;#FFF;]git branch {nome}]\n'+
                      
                      'Com o checkout você pode também criar a branch\ne ir para a mesma:\n' +
                      '[[b;#FFF;]git branch {nome} -b]\n'   
                    );
        },
        add: function() {
            arr[5] = 1;
            this.echo('\n[[b;#ff3300;]git add {}]\n\n' +
                      '> O comando add é utilizado para que possamos informar'+
                      '> ao github os arquivos que iremos comitar.\n\n' +'É possivel adicionarmos arquivos um a um:\n'+
                      '[[b;#fff;]git add {arquivo.extensao}]\n'+
                      '[[b;#fff;]git add {caminho/arquivo2.extensao}]\n'+
                      
                      'Ou podemos adicionar todos os arquivos alterados de uma \nunica vez:\n'+
                      '[[b;#fff;]git add . \n\n'
                     );
            
        },
        merge: function() {
            arr[6] = 1;
            this.echo('\n[[b;#ff3300;]git merge {} {}] \n\n'
                      +
                      '> Um merge é a união de duas branches, normalmente\n' +
                      '> merges são feitos na branch master.\n' +
                      '> Os merges costumam dar bastante problema, pois\n' +
                      '> os códigos podem (e provavelmente vão entrar em conflito).\n\n' +
                      'Como realizar um merge:\n'+
                      'É necessário estar na branch de destino:\n'+
                       '[[b;#fff;]git checkout {branch}]\n'+
                      'Unindo as branches:\n'+
                       '[[b;#fff;]git merge {branch a unir}]\n');
                   
        },
        clone: function() {
            arr[7] = 1;
            this.echo('\n[[b;#ff3300;]git clone {}] \n\n'
                      +
                      '> Um clone de um repositório funciona como uma branch\n' +
                      '> de um repositório online em um repositório local. Ou\n' +
                      '> seja, quando se deseja trabalhar em um repositório hospedado\n' +
                      '> no github, clona-se esse repositório para o seu computador,\n'+
                      '> trabalha-se nele, e então é pedida a permissão\n'+
                      '> para atualizar as alterações online.\n\n' +
                      'Como realizar um clone:\n'+
                       '[[b;#fff;]git clone {url do repositório}]\n\n');
                    
        },
        pull: function() {
            arr[8] = 1;
            this.echo('\n[[b;#ff3300;]git pull {} {}]\n\n'+
                      '> É uma atualização do repositório local. É feito\n'+
                      '> um merge do repositório online com o local para que\n' +
                      '> os conflitos sejam resolvidos e seja possível enviar o\n'+
                      '> código (sem conflitos) para o repositório online por meio de um push.\n\n' +
                      'Realizando o pull:\n'+
                    '[[b;#fff;]git pull {branch destino} {branch origem}]\n\n'
                     );
            
        },
        push:function(){
            arr[9]=1;
            this.echo('\n[[b;#ff3300;]git pull {} {}]\n\n'+
                      '> É uma atualização do repositório local. É feito\n'+
                      '> um merge do repositório online com o local para que\n' +
                      '> os conflitos sejam resolvidos e seja possível enviar o\n'+
                      '> código (sem conflitos) para o repositório online por meio de um push.\n\n' +
                      'Realizando o pull:\n'+
                    '[[b;#fff;]git pull {branch destino} {branch origem}]\n\n'
                     );
        },
        status:function(){
            arr[10]=1;
            this.echo('\n[[b;#ff3300;]git status]\n\n'+
                      '> O git status serve para exibir se há alguma pendencia,\n'+
                      '> como por exemplo um commit que ainda não foi enviado\n' +
                      '\n\n' +
                      'Utilizando o status:\n'+
                    '[[b;#fff;]git status]\n\n'
                     );
        },
        
        ///
        remote:function(){
            arr[11]=1;
            this.echo('\n[[b;#ff3300;]git remote add {} {}]\n\n'+
                      '> Quando você está trabalhando em seu computador e quer\n'+
                      '> que upar seus arquivos ao repositório no github, é necessário\n' +
                      '> que você esteja conectado ao seu repositório. É isso que o remote\n'+
                      '> faz por nós. Deixa a conexão pronta para que você possa commitar\n'+
                      '> todas suas alterações e códigos.\n\n' +
                      'Utilizando o remote:\n'+
                    '[[b;#fff;]git remote add {nome/apelido} {url do repositório do git}]\n\n'+
                      'É importante lembrar que se o repositório não for seu, é necessário\n'+
                      'que o dono do mesmo permita suas alterações :)\n\n'
                      
                     );
        },
        log:function(){
            arr[12]=1;
            this.echo('\n[[b;#ff3300;]git log]\n\n'+
                      '> É quem exibe todo o histórico de commits\n'+ '\n' +
                      'Utilizando o log:\n'+
                    '[[b;#fff;]git log]\n\n'
                     );
        },
        fetch:function(){
            arr[13]=1;
            this.echo('\n[[b;#ff3300;]git fetch {}]\n\n'+
                      '> É o comando que pode te mostrar se o repositório remoto\n'+
                      '> tem novas branches\n\n' +
                      'Utilizando o fetch:\n'+
                    '[[b;#fff;]git fetch {origin}]\n\n'
                     );
        },
        tag:function(){
            arr[14]=1;
            this.echo('\n[[b;#ff3300;]git tag]\n\n'+
                      '> Exibe as tags de versões\n\n'
                     );
        },
        diff:function(){
            arr[15]=1;
            this.echo('\n[[b;#ff3300;]git diff {} {}]\n\n'+
                      '> Faz a comparação entre versões, mostrando as mudanças\n'+
                      '> que ocorreram\n\n' +
                      'Utilizando o diff:\n'+
                    '[[b;#fff;]git diff {vXX} {vYY}]\n\n'
                     );
        }, 
        blame:function(){
            arr[16]=1;
            this.echo('\n[[b;#ff3300;]git blame {} ]\n\n'+
                      '> Exibe quem utilizou ou alterou o arquivo solicitado\n\n'+
                      'Realizando o blame:\n'+
                    '[[b;#fff;]git blame {index.html}]\n\n'
                     );
        },
        ls:function(){
            arr[17]=1;
            this.echo('\n[[b;#ff3300;]git ls-files]\n\n'+
                      '> Exibe as pastas que o github entende que já estão no\n'+
                      '> repositório.\n\n' 
                     );
        },
                
        Clear: function() {
            this.echo('> The clear(lower C) command, clears your terminal screen');
            this.echo('> Type [[b;#ff3300;]clear] to clean your terminal');
            this.push(function(cmd,term) {
                if(cmd == 'clear' || cmd == 'Clear') //Changed here
                {
                    arr[18]=1;          
                }
                else 
                    this.echo('[[b;#ff3300;]Wrong step commands. Type the exact commands requested.]\n');
            });
        },
    }, {
        
        // DANGER: high
        // Don't mess with this part or else all HELL will fall loose.

    	prompt:"[[b;#44D544;]git-helper~$] ",
        greetings: "################################################################\n" +
                    "                     GITHUB Helper\n" +
                    "################################################################\n" +
                   "Este é um projeto desenvolvido no programa de bolsas\n" +
                   "de 2019 para incentivar o aprendizado de git e exercitar\n" + 
                   "JavaScript, CSS e HTML\n"+
                    "################################################################\n" +
                   "Para utilizar o sistema basta digitar o comando que você deseja\n" +
                   "saber mais =) para ver a lista de todos os comandos documentados\n" +
                    "digite help\n\n\n" ,
        onBlur: function() {
            // prevent loosing focus
            return false;
        }       
    });
});
