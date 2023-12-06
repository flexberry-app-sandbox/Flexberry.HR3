import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-r-анкеты-l');
  this.route('i-i-s-h-r-анкеты-e',
  { path: 'i-i-s-h-r-анкеты-e/:id' });
  this.route('i-i-s-h-r-анкеты-e.new',
  { path: 'i-i-s-h-r-анкеты-e/new' });
  this.route('i-i-s-h-r-должности-l');
  this.route('i-i-s-h-r-должности-e',
  { path: 'i-i-s-h-r-должности-e/:id' });
  this.route('i-i-s-h-r-должности-e.new',
  { path: 'i-i-s-h-r-должности-e/new' });
  this.route('i-i-s-h-r-контроль-т-з-l');
  this.route('i-i-s-h-r-контроль-т-з-e',
  { path: 'i-i-s-h-r-контроль-т-з-e/:id' });
  this.route('i-i-s-h-r-контроль-т-з-e.new',
  { path: 'i-i-s-h-r-контроль-т-з-e/new' });
  this.route('i-i-s-h-r-отделы-l');
  this.route('i-i-s-h-r-отделы-e',
  { path: 'i-i-s-h-r-отделы-e/:id' });
  this.route('i-i-s-h-r-отделы-e.new',
  { path: 'i-i-s-h-r-отделы-e/new' });
  this.route('i-i-s-h-r-сотрудники-l');
  this.route('i-i-s-h-r-сотрудники-e',
  { path: 'i-i-s-h-r-сотрудники-e/:id' });
  this.route('i-i-s-h-r-сотрудники-e.new',
  { path: 'i-i-s-h-r-сотрудники-e/new' });
  this.route('i-i-s-h-r-физ-лица-l');
  this.route('i-i-s-h-r-физ-лица-e',
  { path: 'i-i-s-h-r-физ-лица-e/:id' });
  this.route('i-i-s-h-r-физ-лица-e.new',
  { path: 'i-i-s-h-r-физ-лица-e/new' });
  this.route('i-i-s-hr-анкеты-l');
  this.route('i-i-s-hr-анкеты-e',
  { path: 'i-i-s-hr-анкеты-e/:id' });
  this.route('i-i-s-hr-анкеты-e.new',
  { path: 'i-i-s-hr-анкеты-e/new' });
  this.route('i-i-s-hr-должности-l');
  this.route('i-i-s-hr-должности-e',
  { path: 'i-i-s-hr-должности-e/:id' });
  this.route('i-i-s-hr-должности-e.new',
  { path: 'i-i-s-hr-должности-e/new' });
  this.route('i-i-s-hr-контроль-т-з-l');
  this.route('i-i-s-hr-контроль-т-з-e',
  { path: 'i-i-s-hr-контроль-т-з-e/:id' });
  this.route('i-i-s-hr-контроль-т-з-e.new',
  { path: 'i-i-s-hr-контроль-т-з-e/new' });
  this.route('i-i-s-hr-отделы-l');
  this.route('i-i-s-hr-отделы-e',
  { path: 'i-i-s-hr-отделы-e/:id' });
  this.route('i-i-s-hr-отделы-e.new',
  { path: 'i-i-s-hr-отделы-e/new' });
  this.route('i-i-s-hr-сотрудники-l');
  this.route('i-i-s-hr-сотрудники-e',
  { path: 'i-i-s-hr-сотрудники-e/:id' });
  this.route('i-i-s-hr-сотрудники-e.new',
  { path: 'i-i-s-hr-сотрудники-e/new' });
  this.route('i-i-s-hr-физ-лица-l');
  this.route('i-i-s-hr-физ-лица-e',
  { path: 'i-i-s-hr-физ-лица-e/:id' });
  this.route('i-i-s-hr-физ-лица-e.new',
  { path: 'i-i-s-hr-физ-лица-e/new' });
});

export default Router;
