var Jed = require('jed');

var localeData = {
  messages: {
    '': {
      domain: 'messages',
      lang: 'en',
      plural_forms: 'nplurals=2; plural=(n != 1);'
    }
  }
};

var i18n = new Jed({locale_data: localeData});

i18n.moment = require('moment');
i18n.locale = 'en';

module.exports = i18n;
