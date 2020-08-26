const jwt = require('jsonwebtoken');

const ForbiddenError = require('./errors/forbidden_403_error');
const UnauthorizedError = require('./errors/unauthorized_401_error');

const JWT_SIGN_SECRET =
  '9gMQj5wdpSfYwDBWji3wJoVcXwgEXvaBXc1FFBJiY2yXI9447gzTgCA-kyWOkGTVlEQUuVDqdeKJLLWuHpuU-0GY3SzqwrxxrvkIl8l84HKItZWRFA1UxHh7r7LaF7xUZ';

module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
        userRole: userData.role,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: '1h',
      }
    );
  },

  authenticateJWT: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, JWT_SIGN_SECRET, (err, user) => {
        if (err) {
          throw new ForbiddenError(
            'Accès non autorisé',
            "Désolé, vous n'êtes pas autorisé à accéder à cette ressource"
          );
        }

        req.user = user;

        next();
      });
    } else {
      throw new UnauthorizedError(
        'utilisateur non authentifié ',
        'Vous devez être connecté pour accéder à cette ressource'
      );
    }
  },
};
