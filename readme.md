# POC da biblioteca moment.js

_Moment.js é uma biblioteca de datas JavaScript para analisar, validar, manipular e formatar datas._

* [Página oficial](https://momentjs.com/)

* [Repositório GitHub](https://github.com/moment/moment/)

## Importação da biblioteca e utilização

### iniciar um projeto node
```
npm init -y
```

### instalar a biblioteca
```
npm install moment
```

### adicionar ao package.json a propriedade _type_ e definir o valor como _module_ para utilizar os modulos ES6
```
"type": "module"
```

### realizar a importação da função no arquivo ex: ./src/index.js
```
import moment from "moment"
```