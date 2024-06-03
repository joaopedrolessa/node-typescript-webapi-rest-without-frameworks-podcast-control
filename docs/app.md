# Podcast Menager

## Descrição

um app ao estilo netflix, onde eu possa centralizar diferentes podcast separado por diferentes espisodios

### Dominio

podcast feito em video

### Features

- Listar os podcast em sessões de categorias
  - [saude, fitnes, mentalidade, humor, politica]
- Filtar ep por nome de podcast

## Como

### Feature:

- Listar os podcast em sessões de categorias

### Como vou implementar

GET: retsorna lista de ep

response:

```js
[
{
    podcastName: "flow";
    episode: "TAXAÇÃO DOS 50 DÓL + PL DA GLOBO [+ Kim Kataguiri]";
    videoID: "r2l2EJIBTLk"
    cover: "https://i.ytimg.com/vi/r2l2EJIBTLk/maxresdefault.jpg";
    link: "https://www.youtube.com/watch?v=r2l2EJIBTLk"
    categories: ["politica"]

}

{
    podcastName: "flow";
    episode: "IGORFINA - Extra Flow";
    videoID: "vhykXU7PPVc"
    cover: "https://i.ytimg.com/vi/vhykXU7PPVc/maxresdefault.jpg";
    link: "https://www.youtube.com/watch?v=vhykXU7PPVc"
    categories: ["Humor", "fitnes"]

}
]
```

GET: retsorna lista de ep baseado em um parametro enviado pelo client do nome do podcast
