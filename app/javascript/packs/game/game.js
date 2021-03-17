import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-html'

(function() {
  'use strict';
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonStateInitial();

  // タイマースタート処理
  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  // タイマーストップ処理
  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  // タイマーリセット処理
  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });

  window.addEventListener("load", function () {
    // 問題用エディタ設定
    var leftEditor = ace.edit("left-editor");
    leftEditor.setTheme("ace/theme/monokai");
    leftEditor.getSession().setMode("ace/mode/html");
    var question = leftEditor.getValue();

    // 回答用エディタ設定
    var rightEditor = ace.edit("right-editor");
    rightEditor.setTheme("ace/theme/monokai");
    rightEditor.getSession().setMode("ace/mode/html");

    // 回答判別処理
    rightEditor.getSession().on('change', function(){
      var answer = rightEditor.getValue();
      if (answer == question) {
        document.querySelector('#result').innerHTML = 'OK';
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
      } else {
        document.querySelector('#result').innerHTML = 'NG';
      }
    });
  })

  // スペーススタート処理
  window.addEventListener('keypress', onKeyPress)
  function onKeyPress(e) {
    if ( e.keyCode === 32) {
      setButtonStateRunning();
      startTime = Date.now();
      countUp();
    }
    return
  }
}
})();

// pre > code直下の特殊文字をエスケープ
document.querySelectorAll('pre > code').forEach(function (elem) {
  elem.textContent = elem.innerHTML.trim();
});
