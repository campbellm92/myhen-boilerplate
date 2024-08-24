## MyHEN Stack Boilerplate ![hen](images/chook0a.gif)

Questo repo fornisce un boilerplate per un'app che utilizza lo stack MyHEN:

**MySQL:** per il database.
**Handlebars** per il templating, il rendering lato server.
**Express:** per il routing e l'architettura dell'app.
**Node.js:** runtime.

Questo boilerplate è utile per progetti che utilizzano lo stack MyHEN, ideale per creare siti statici e applicazioni web dinamiche.

Il proghetto e ancora un lavoro in corso. Intendo continuare ad aggiungere nuovo boilerplate.

### Come Usare

Per utilizzare questo boilerplate, è necessario avere installato Node.js e MySQL.

1. Clonare il repo:

```bash
git clone git@github.com:campbellm92/myhen-boilerplate.git
```

2. Installare le dipendenze:

```bash
npm install
```

3. Configurare le variabili ambientali:

Creare un file .env nella directory principale e aggiungere le variabili necessarie. Al minimo, è necessario configurare il database:

```bash
DB_HOST=localhost
DB_USER=user
DB_PASSWORD=pass
DB_NAME=db_name
```

4. Avviare il server:

Una volta configurato, puoi avviare il server con:

```bash
npm start
```

Il server sarà attivo all'indirizzo http://localhost:3000/.

## Licenza

Il boilerplate è libero per l'uso sotto la licenza MIT. Se desideri contribuire, sei il benvenuto! Puoi fare un fork del repository, creare una nuova branch, e inviare una pull request con le tue modifiche.
