Mail e Dadi
===

## Esercizio

MAIL

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email

GIOCO DEI DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

BONUS

Consentire solo l’inserimento di dati validi

## Mio approccio

MAIL

1. Per cominciare avrò bisogno di un array che contenga gli indirizzi email che possono accedere, penso quindi di creare un array allowedEmails con qualche email facsimile che mi aiuti nel controllo di eventuali errori.
2. A questo punto imposto una variabile let message; che andrò a modificare successivamente, e un prompt che chiederà di inserire la propria email.
3. Userò quindi un if (allowedEmails.includes(askEmail)) allora avrò un messaggio di di operazione andata a buon fine, altrimenti con un else un messaggio con risposta negativa.

GIOCO DEI DADI

1. Per prima cosa imposterò due variabili const con un valore numerico di partenza Math.ceil(Math.random() * 6);, che chiamerò playerNumber e computerNumber.
2. ora posso dividire le tre casistiche in cui: 1. il giocatore vince. 2. il computer vince. 3. c'è un pareggio. il tutto penso di farlo con degli if che gestiscono la singola circostanza.