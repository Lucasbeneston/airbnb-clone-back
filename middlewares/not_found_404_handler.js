const NotFoundError = require('../utils/errors/not_found_404_error');

module.exports = (request, response, next) => {
  throw new NotFoundError(
    'Ressource introuvable',
    "Désolé, nous n'avons pas trouvé la ressource demandée. Vérifiez l'URI et réessayez."
  );
};
