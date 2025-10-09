'use strict';
const ANIM_THEME_BLOCK_TIME = 1000;
const THEME_DIS_TIME = 1250;
//Load music
const container = document.querySelector('main');
const songs = [
{i:'Spohady',t:'Спогади',s:'https://topmusicua.com/uploads/files/2024-05/1715323951_brl2020d01d0bfd0bd0b3d0b0d0b4d0b8.mp3'},
{i:'UkrainaEtalon',t:'Україна еталон',s:'https://topmusicua.com/uploads/files/2023-05/1683878701_brl2020d03d0bd180d0b0d197d0bdd0b020d095d182d0b0d0bbd0bd0bd.mp3'},
{i:'Voinam',t:'Воїнам',s:'https://topmusicua.com/uploads/files/2023-02/1677167189_brl2020d092d0bd197d0bdd0b0d0bc.mp3'},
{i:'BiliaVikna',t:'Біля мого вікна війна',s:'https://pisnia.com/uploads/files/2022-06/1654356248_brl20_20d01d185d0bd0b6d0b02020d091d196d0bbd18f20d09cd0bd0b3d0b20d092d196d0bd0bdd0b0.mp3'},
{i:'Ridna',t:'Рідна',s:'https://pisnia.com/uploads/files/2022-08/1659600307_brlrdn.mp3'},
{i:'Roztopy',t:'Розтопи',s:'https://topmusicua.com/uploads/files/2023-11/1699610038_brl2020d00d0bd0b7d182d0bd0bfd0b8.mp3'},
{i:'MolytvaSoldata',t:'Молитва солдата',s:'https://dl.muzv.net/uploads/music/2023/01/BURLA_-_Molitva_soldata.mp3'},
{i:'Travmatyka',t:'Травматика',s:'https://topmusicua.com/uploads/files/2024-07/1720170880_brltrvmtk.mp3'},
{i:'Mutky',t:'Мутки',s:'https://musua.org/fast-download/eyJpZCI6Ijc1NTAiLCJ1cmwiOiJidXJsYS1tdXRraSIsInR5cGUiOiJsb2FkIn0=.mp3'},
{i:'rusKorabl',t:'руський корабль',s:'https://mp3dim.com/mp3-load/eyJpZCI6IjU4OTQiLCJ1cmwiOiJidXJsYS1ydXNraXkta29yYWJsIiwidHlwZSI6ImxvYWQifQ==.mp3'},
{i:'Vohniamy',t:'Вогнями',s:'https://musua.org/fast-download/eyJpZCI6IjM0MTMiLCJ1cmwiOiJidXJsYS12b2dueWFtaSIsInR5cGUiOiJsb2FkIn0=.mp3'},
{i:'Desat',t:'Десять(10)',s:'https://topmusicua.com/uploads/files/2024-02/1708672643_brl202010.mp3'},
{i:'Mova',t:'Мова',s:'https://topmusicua.com/uploads/files/2023-12/1702628003_brl2020d09cd0bd0b2d0b0.mp3'},
{i:'Oleg',t:'Олєг',s:'https://topmusicua.com/uploads/files/2024-02/1706942324_d08d183d0b3d0b0d1802020d09d0bbd194d0b3.mp3'},
{i:'Dezhaviu',t:'Дежавю',s:'https://musua.org/fast-download/eyJpZCI6IjUzNSIsInVybCI6ImFydGVtLXBpdm92YXJvdi1kZXpoYXZ5dSIsInR5cGUiOiJsb2FkIn0=.mp3'},
{i:'Zmia',t:'Змія',s:'https://muzcore.online/uploads/files/2024-06/1719584956_-zmya.mp3'},
{i:'VsimPacykam',t:'Всім нашим пацикам',s:'https://world79.spcs.bio/music/download/ms01/music/m/009195131179035032076166001116173063044200255209240001164217/1759412981/123341330/0/cd740035a3c50887c7ae9748aaf39022/HMARA-Vsim_Nawim_Pacikam-world79.spcs.bio.mp3'},
{i:'PlotnaArta',t:'Плотно насипає тут арта',s:'https://dl.zamp3.net/files/track/2022/08/yourcoach-plotno-nasipaye-tut-arta.mp3'},
{i:'ChutyGimn',t:'Чути гімн',s:'https://ukrmuz.net/uploads/files/2024-08/1723710966_skfk221312231c.mp3'},
{i:'OhNaOh',t:'Ой на ой',s:'https://musua.org/fast-download/eyJpZCI6IjUxOTQiLCJ1cmwiOiJza29ma2Etb3ktbmEtb3kiLCJ0eXBlIjoibG9hZCJ9.mp3'},
{i:'NeZabudemo',t:'Не забудем і не Пробачим',s:'https://dl.zamp3.net/files/track/2022/05/skofka-ne-zabudem-i-ne-probachim.mp3'},
{i:'Kaseta',t:'Касета',s:'https://dl.zamp3.net/files/track/2022/04/sadsvit-kaseta.mp3'},
{i:'PidZoriamy',t:'Азовсталь десь там під зорями',s:'https://pisnia.com/uploads/files/2022-12/1671804710_dlmrzvstldstmpdzrm.mp3'},
];container.innerHTML = songs.map(({i,t,s})=>`<article id='${i}'><h2>${t}</h2><audio src='${s}'preload='none'controls></audio></article>`).join('')

//Навігація
function showMenuLogic() {
  navMenu.classList.toggle('activated');
  btnSM.classList.toggle('activated');
  btnSM.textContent = btnSM.classList.contains('activated') ? '✖' : '☰';
}
const navMenu = document.querySelector('.nav-tp-block');
const btnSM = document.querySelector('.show-menu');
//Показати меню
btnSM.addEventListener('click',showMenuLogic)
//Відкрити та закрити nav-tp-block на 'Esc'
document.addEventListener('keydown', e => {if(e.key === 'Escape') { showMenuLogic()}})

//Theme animation-block
const thTopAnimBlock = document.querySelector('.theme-animation-TopBlock');
const thSwitcherBtn = document.querySelector('.themes-switcher-btn');
const thBotAnimBlock = document.querySelector('.theme-animation-BottomBlock');
thSwitcherBtn.addEventListener('click',()=>{
  thTopAnimBlock.classList.add('th-anim'); 
  thBotAnimBlock.classList.add('th-anim'); 
  setTimeout(()=>{
    thTopAnimBlock.classList.remove('th-anim'); 
    thBotAnimBlock.classList.remove('th-anim')}, ANIM_THEME_BLOCK_TIME)})

//Audio highlight effect
navMenu.addEventListener('click', e => {
  if (e.target.matches('a[href^="#"]')) {
    const id = e.target.getAttribute('href').slice(1)
    const targetEl = document.getElementById(id)
    if (targetEl) {
      targetEl.classList.remove('highlight')
      void targetEl.offsetWidth
      targetEl.classList.add('highlight')}}})

//Paused audio
const audios = container.querySelectorAll('audio');
container.addEventListener('play', e => {if (e.target.tagName === 'AUDIO') {audios.forEach(a => a !== e.target && a.pause())}}, true);

//Theme switcher
class ThemeSwitcher {
  constructor() {
    this.switchThemeButtonElement = document.querySelector('.themes-switcher-btn')
    this.setInitialSettings(); this.updTextBtn()
  } get blueCached() { return localStorage.getItem('theme') === 'blue' }
  setInitialSettings() { this.switchThemeButtonElement.addEventListener('click', this.onClick); document.documentElement.classList.toggle('is-blue-theme', this.blueCached) }
  onClick = () => {
    this.toggleDisabled(true); setTimeout(() => { this.toggleDisabled(false) }, THEME_DIS_TIME)
    localStorage.setItem('theme', this.blueCached ? 'yellow' : 'blue')
    document.documentElement.classList.toggle('is-blue-theme')
    this.updTextBtn()
  }
  updTextBtn = () => { this.switchThemeButtonElement.textContent = this.blueCached ? '🌚' : '🌝' }
  //Блокування кнопки
  toggleDisabled(disabled) {this.switchThemeButtonElement.disabled = disabled}}new ThemeSwitcher()