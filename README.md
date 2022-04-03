# udemyAngularNodeMean

### Primeros pasos con angular 

1. Desinstalar Angular.

`npm uninstall -g @angular/cli` Desinstalamos angular.

`npm cache verify`    Eliminamos la cache de angular. 

`npm cache clear --force`     Nos aseguramos de eliminar la cache de angular. 


2. Reinstalar / Instalar Angular. 

`npm install -g @angular/cli`     instalamos el cliente CLI de angular.




3. Iniciando proyectos con Angular. 

`ng new nombre-del-proyecto`    Asi iniciamos el proyecto.

`ng serve`    Iniciamos el proyecto en Angular. 

`ng serve -o` para ejecutar la pagina en nuestro navegador por defecto.


4. Generando componentes. 

`ng generate component cursos` Asi creamos un nuevo componente desde la consola de comandos.


## Primeros pasos con el backEnd

### Instalando y controlando mongoDb

`sudo systemctl status mongodb` estado de mongoDb en ubuntu.

`sudo systemctl stop mongodb` Detiene a mongoDb.

`sudo systemctl start mongodb` Inicia a mongoDb.

`sudo systemctl restart mongodb` Reinica a mongoDb. 

`sudo systemctl disable mongodb` Desactiva el inicio automatico con el servidor.

`sudo systemctl enable mongodb` Activa el inicio automatico con el servidor.

### Instalando dependencias:

Estando en la carpeta del proyecto ejectuamos los siguientes comandos:

`--save` es para que se quede guardado en el proyecto local.

`npm install express --save` instalado el modulo express.(es un framework para trabajar con http)

`npm install body-parser --save` moduclo de body-parser.

`npm install connect-multiparty --save` permite subir archivos al backEnd. y trabajar con el protocolo files.

`npm install mongoose --save` Es una serie de metodos para poder trabajar con MongoDb.

`npm install nodemon --save-dev` Refresca automaticamente los cambios en el codigo. (super util)

