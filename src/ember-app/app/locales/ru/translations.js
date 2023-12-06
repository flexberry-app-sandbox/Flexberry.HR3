import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISHRАнкетыLForm from './forms/i-i-s-h-r-анкеты-l';
import IISHRДолжностиLForm from './forms/i-i-s-h-r-должности-l';
import IISHRКонтроль_ТЗLForm from './forms/i-i-s-h-r-контроль-т-з-l';
import IISHRОтделыLForm from './forms/i-i-s-h-r-отделы-l';
import IISHRСотрудникиLForm from './forms/i-i-s-h-r-сотрудники-l';
import IISHRФиз_лицаLForm from './forms/i-i-s-h-r-физ-лица-l';
import IISHRАнкетыEForm from './forms/i-i-s-h-r-анкеты-e';
import IISHRДолжностиEForm from './forms/i-i-s-h-r-должности-e';
import IISHRКонтроль_ТЗEForm from './forms/i-i-s-h-r-контроль-т-з-e';
import IISHRОтделыEForm from './forms/i-i-s-h-r-отделы-e';
import IISHRСотрудникиEForm from './forms/i-i-s-h-r-сотрудники-e';
import IISHRФиз_лицаEForm from './forms/i-i-s-h-r-физ-лица-e';
import IISHRАнкетыModel from './models/i-i-s-h-r-анкеты';
import IISHRДолжностиModel from './models/i-i-s-h-r-должности';
import IISHRКонтроль_ТЗModel from './models/i-i-s-h-r-контроль-т-з';
import IISHRОтделыModel from './models/i-i-s-h-r-отделы';
import IISHRПроверяемыеModel from './models/i-i-s-h-r-проверяемые';
import IISHRСотрудникиModel from './models/i-i-s-h-r-сотрудники';
import IISHRФиз_лицаModel from './models/i-i-s-h-r-физ-лица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-r-анкеты': IISHRАнкетыModel,
    'i-i-s-h-r-должности': IISHRДолжностиModel,
    'i-i-s-h-r-контроль-т-з': IISHRКонтроль_ТЗModel,
    'i-i-s-h-r-отделы': IISHRОтделыModel,
    'i-i-s-h-r-проверяемые': IISHRПроверяемыеModel,
    'i-i-s-h-r-сотрудники': IISHRСотрудникиModel,
    'i-i-s-h-r-физ-лица': IISHRФиз_лицаModel
  },

  'application-name': 'HR',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HR',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HR',
          title: 'HR'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'h-r': {
          caption: 'HR',
          title: 'HR',
          'i-i-s-h-r-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-h-r-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-h-r-контроль-т-з-l': {
            caption: 'Контроль_ ТЗ',
            title: ''
          },
          'i-i-s-h-r-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-h-r-физ-лица-l': {
            caption: 'Физ_лица',
            title: ''
          },
          'i-i-s-h-r-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-h-r-анкеты-l': IISHRАнкетыLForm,
    'i-i-s-h-r-должности-l': IISHRДолжностиLForm,
    'i-i-s-h-r-контроль-т-з-l': IISHRКонтроль_ТЗLForm,
    'i-i-s-h-r-отделы-l': IISHRОтделыLForm,
    'i-i-s-h-r-сотрудники-l': IISHRСотрудникиLForm,
    'i-i-s-h-r-физ-лица-l': IISHRФиз_лицаLForm,
    'i-i-s-h-r-анкеты-e': IISHRАнкетыEForm,
    'i-i-s-h-r-должности-e': IISHRДолжностиEForm,
    'i-i-s-h-r-контроль-т-з-e': IISHRКонтроль_ТЗEForm,
    'i-i-s-h-r-отделы-e': IISHRОтделыEForm,
    'i-i-s-h-r-сотрудники-e': IISHRСотрудникиEForm,
    'i-i-s-h-r-физ-лица-e': IISHRФиз_лицаEForm
  },

});

export default translations;
