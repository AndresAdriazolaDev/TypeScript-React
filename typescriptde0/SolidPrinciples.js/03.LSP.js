const consoleHandlerError = {
  handle: function (error) {
    console.log(error);
  },
};

const externalHandlerError = {
  handle: function (error) {
    console.log(error);
  },
};

function requestApi(url, handleError) {
  fetch(url)
    .then((response) => response.json())
    .catch(handleError.handle(error));
}

requestApi(url, consoleHandlerError);
requestApi(url, externalHandlerError);

/*
la idea del principio de liskov es poder refactorizar el codigo padre y que los componentes internos
puedan ser variados como en el ejemplo de arriba.
ej en vida real:
quieres hacer un pie,
pero puede ser de limón o naranja.
ambos son un pie, pero el medio es el distinto pero el mismo fin.
*/
