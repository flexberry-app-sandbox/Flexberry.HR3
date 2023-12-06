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
            link: 'i-i-s-h-r-отделы-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-отделы-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-h-r-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-сотрудники-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-h-r-контроль-т-з-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-контроль-т-з-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-контроль-т-з-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-h-r-анкеты-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-анкеты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-h-r-физ-лица-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-физ-лица-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-физ-лица-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-h-r-должности-l',
            caption: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.h-r.i-i-s-h-r-должности-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})