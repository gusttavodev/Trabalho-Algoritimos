# Trabalho-Algoritimos

# Preparando ambiente

    1. Tenha o NodeJS 10+ instalado
    2. Tenha o git Instalado
    3. Execute git clone https://github.com/GadsDev/Trabalho-Algoritimos.git
    4. Execute npm install
    5. Execute node index.js 

# Um arquivo chamado result.cvs vai ser gerado com o dados da execução

# Informações de uso de memoria

[Referência](https://nodejs.org/api/process.html#process_process_memoryusage)

Um programa em execução é sempre representado através de algum espaço alocado na memória. 
Esse espaço é chamado Conjunto Residente. O V8(Motor de execução no NodeJS) usa um esquema semelhante ao Java Virtual Machine e divide a memória em segmentos:

# Sobre os dados gerados
    1. heapTotal e heapUsed referem-se ao uso de memória da V8.
    2. external refere-se ao uso de memória de objetos C ++ vinculados a objetos JavaScript gerenciados pela V8.
    3. rss, tamanho do conjunto residente, é a quantidade de espaço ocupado no dispositivo de memória principal (que é um subconjunto da memória total alocada) para o processo, incluindo todos os objetos e códigos em C ++ e JavaScript.)
    

# Uso de memoria com 1000000 execuções
    1. rss 51.25 MB
    2. heapTotal 23 MB
    3. heapUsed 12.86 MB
    4. external 0.01 MB
    