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
    sendgrid_api_key:
      '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',
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
    FROM: 'obafedance@gmail.com',
    RECYFRICA_EMAIL: 'obafejo@gmail.com',
    CONTACT_TEMPLATE_URL: './contact-us.handlebars',
    sendgrid_api_key:
      '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',
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
    sendgrid_api_key:
      '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',
  },
};
