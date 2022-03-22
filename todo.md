/*
    Crear un microservicio que tenga dos endpoints, el primero, un POST a la ruta /api/shorturl(Que se haga a travez de un formulario HTML) el cual enviara un body de tipo JSON al backend con una URL, este se encargara de verificar que sea una URL valida: https://blabla, si es valida, debera almacenarla en una base de datos y responderle al cliente con el siguiente mensaje:
    {"original_url" : "https://algo.com" , "short_url": 1 }, si no es valida el mensaje sera el siguiente: {"error":"Invalid URL"}.
    Basicamente, la respuesta sera la url original del link enviado y el numero que va a identificar a esa URL. Con ese numero vamos a poder acceder a esa URL de manera corta por ejemplo:
    https://link-del-proyecto/api/shorturl/1 nos mandara a la pagina "algo.com". Y a medida que se manden URLS ese numero con el cual se identifico la pagina se seguira incrementando. Ahora. Si nos mandan una URL IDENTICA a una ya almacenada, le vamos a responder con la URL ya almacenada previamente y no vamos a repetir esa informacion e nuesta BD.
    
    El siguiente endpoint va a ser una peticion GET a la ruta /api/shorturl/:url
    Obviamente la URL le vamos a recibir por urlParams y verificar si existe esa url almacenada en la BD, si existe lo vamos a redireccionar, de lo contrario le vamos a mandar el mensaje {"error":"No short URL found for the given input"}
    Si es un parametro invalido por ejemplo strings le mandamos {"error":"Wrong format"}
*/