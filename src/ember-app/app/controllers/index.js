import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.h-r.caption'),
          title: i18n.t('forms.application.sitemap.h-r.title'),
          children: [{
            link: 'i-i-s-hr-отделы-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-отделы-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-hr-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-hr-контроль-т-з-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-контроль-т-з-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-контроль-т-з-l.title'),
            children: null
          }, {
            link: 'i-i-s-hr-анкеты-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-анкеты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-hr-физ-лица-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-физ-лица-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-физ-лица-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-hr-должности-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-hr-должности-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})