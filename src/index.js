import BooleanRadio from './components/booleanRadio.vue';
import Breadcrumbs from './components/breadcrumbs.vue';
import Icon from './components/icon.vue';
import Messages from './components/messages.vue';
import Suggestion from './components/suggestion.vue';
import Tabs from './components/tabs.vue';

import { LocalesMixin, locales } from './mixins/localesMixin';
import AuthMixin from './mixins/authMixin';
import MessagesMixin from './mixins/messagesMixin';
import NavMixin from './mixins/navMixin';

import MessagesStore from './store/messagesStore';
import AuthStore from './store/authStore';

import http from './services/http';

export default {
  Components: {
    BooleanRadio,
    Breadcrumbs,
    Icon,
    Messages,
    Suggestion,
    Tabs,
  },
  Mixins: {
    NavMixin,
    MessagesMixin,
    AuthMixin,
  },
  Stores: {
    MessagesStore,
    AuthStore,
  },
  install(Vue, options) {
    http.init(options);
    // 3. injecter des options de composant
    Vue.mixin(LocalesMixin);
  },
  loadLocale(languageName, dictionnary) {
    locales.$load(languageName, dictionnary);
  },
};
