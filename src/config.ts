export const Config = {
  production: {
    port: process.env.PORT || 1997,
    database:
      'mongodb+srv://recyfrica:sapafarawayfromme@recyfrica.mbqjo.mongodb.net/PROD?retryWrites=true&w=majority',
    secret: 'eye_wey_see_nah_eye_wey_chop',
    databaseoptions: {
      keepAlive: 'true',
      connectTimeoutMS: 0,
      useNewUrlParser: true,
    },
  },
  staging: {
    port: process.env.PORT || 1997,
    database:
      'mongodb+srv://recyfrica:sapafarawayfromme@recyfrica.mbqjo.mongodb.net/STAGING?retryWrites=true&w=majority',
    secret: 'eye_wey_see_nah_eye_wey_chop',
    databaseoptions: {
      keepAlive: 'true',
      connectTimeoutMS: 0,
      useNewUrlParser: true,
    },
  },
  test: {
    port: process.env.PORT || 1997,
    database:
      'mongodb+srv://recyfrica:sapafarawayfromme@recyfrica.mbqjo.mongodb.net/TEST?retryWrites=true&w=majority',
    secret: 'eye_wey_see_nah_eye_wey_chop',
    databaseoptions: {
      keepAlive: 300000,
      connectTimeoutMS: 0,
      useNewUrlParser: true,
    },
  },
};
