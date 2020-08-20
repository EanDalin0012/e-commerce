﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.setLang("a11yhelp", "oc", {
  title: "Instruccions d'accessibilitat",
  contents: "Contengut de l'ajuda. Per tampar aquesta fenèstra, quichatz sus la tòca Escap.",
  legend: [{
    name: "General",
    items: [{
      name: "Barra d'aisinas de l'editor",
      legend: "Quichar sus ${toolbarFocus} per accedir a la barra d'aisinas. Se desplaçar cap al groupe seguent o precedent de la barra d'aisinas amb las tòcas Tab e Maj+Tab. Se desplaçar cap al boton seguent o precedent de la barra d'aisinas amb las tòcas Sageta dreita e Sageta esquèrra. Quichar sus la barra d'espaci o la tòca Entrada per activer lo boton de barra d'aisinas."
    },
      {
        name: "Fenèstra de l'editor",
        legend: "Dins una bóstia de dialòg, quichar sus Tab per passar a l'element seguent, quichar sus Maj+Tab per passar a l'element precedent, quichar sus Entrada per validar, quichar sus Escap per anullar. Quand una bóstia de dialòg possedís des onglets, la lista pòt èsser atenta amb Alt+F10 o amb Tab. Dins la lista dels onglets, se desplaçar cap al seguent e lo precedent amb las tòcas Sageta dreita e Sageta esquèrra respectivament."
      }, {
        name: "Menú contextual de l'editor",
        legend: "Quichar sus ${contextMenu} o sus la tòca Menú per dobrir lo menú contextual. Se desplaçar ensuite cap a l'opcion seguenta del menú amb las tòcas Tab o Sageta bas. Se desplaçar cap a l'opcion precedenta amb las tòcas Maj+Tab o Sageta naut. Quichar sus la barra d'espaci o la tòca Entrada per seleccionar l'opcion del menu. Quichar sus la barra d'espaci, la tòca Entrada o Sageta dreita per dobrir lo sosmenú de l'opcion seleccionada. Tornar a l'element de menú parent amb la tòca Escap o Sageta esquèrra. Tampar lo menú contextual amb Escap."
      },
      {
        name: "Zòna de lista de l'editor",
        legend: "Dins una lista en menú desenrotlant, se desplaçar cap a l'element seguent de la lista amb las tòcas Tab o Sageta bas. Se desplaçar cap a l'element precedent de la lista amb las tòcas Maj+Tab o Sageta naut. Quichar sus la barra d'espaci o sus Entrada per seleccionar l'opcion dins la lista. Quichar sus Escap per tampar lo menú desenrotlant."
      }, {
        name: "Barra del camin d'elements de l'editor",
        legend: "Quichar sus ${elementsPathFocus} per naviguer cap a la barra del fial d'Ariana dels elements. Se desplaçar cap al boton de l'element seguent amb las tòcas Tab o Sageta dreita. Se desplaçar cap al boton precedent amb las tòcas Maj+Tab o Sageta esquèrra. Quichar sus la barra d'espaci o sus Entrada per seleccionar l'element dins l'editor."
      }]
  },
    {
      name: "Comandas",
      items: [{name: "Anullar la comanda", legend: "Quichar sus ${undo}"}, {
        name: "Comanda restablir",
        legend: "Quichar sus ${redo}"
      }, {name: " Comanda gras", legend: "Quichar sus ${bold}"}, {
        name: " Comanda italica",
        legend: "Quichar sus ${italic}"
      }, {name: " Comanda solinhat", legend: "Quichar sus ${underline}"}, {
        name: " Comanda ligam",
        legend: "Quichar sus ${link}"
      }, {name: "Comanda enrotlar la barra d'aisinas", legend: "Quichar sus ${toolbarCollapse}"}, {
        name: "Comanda d'accès a l'element seleccionable precedent",
        legend: "Quichar sus ${accessNextSpace} per accedir a l'element seleccionable inategnible lo mai pròche abans lo cursor, per exemple : doas linhas orizontalas adjacentas. Repetir la combinason de tòcas per aténher los elements seleccionables precedents."
      }, {
        name: "Comanda d'accès a l'element seleccionable seguent",
        legend: "Quichar sus ${accessNextSpace} per accedir a l'element seleccionable inatenhible lo mai pròche aprèp lo cursor, per exemple : doas linhas orizontalas adjacentas. Repetir la combinason de tòcas per aténher los elements seleccionables seguents."
      },
        {name: " Ajuda sus l'accessibilitat", legend: "Quichar sus ${a11yHelp}"}, {
          name: " Paste as plain text",
          legend: "Press ${pastetext}",
          legendEdge: "Press ${pastetext}, followed by ${paste}"
        }]
    }],
  tab: "Tabulacion",
  pause: "Pausa",
  capslock: "Verr. Maj.",
  escape: "Escap",
  pageUp: "Pagina superiora",
  pageDown: "Pagina seguenta",
  leftArrow: "Sageta esquèrra",
  upArrow: "Sageta naut",
  rightArrow: "Sageta dreita",
  downArrow: "Sageta bassa",
  insert: "Inser",
  leftWindowKey: "Tòca Windows esquèrra",
  rightWindowKey: "Tòca Windows dreita",
  selectKey: "Tòca Seleccionar",
  numpad0: "0 del pavat numeric",
  numpad1: "1 del pavat numeric",
  numpad2: "2 del pavat numeric",
  numpad3: "3 del pavat numeric",
  numpad4: "4 del pavat numeric",
  numpad5: "5 del pavat numeric",
  numpad6: "6 del pavat numeric",
  numpad7: "7 del pavat numeric",
  numpad8: "Pavat numeric 8",
  numpad9: "9 del pavat numeric",
  multiply: "Multiplicar",
  add: "Plus",
  subtract: "Mens",
  decimalPoint: "Punt decimal",
  divide: "Devesir",
  f1: "F1",
  f2: "F2",
  f3: "F3",
  f4: "F4",
  f5: "F5",
  f6: "F6",
  f7: "F7",
  f8: "F8",
  f9: "F9",
  f10: "F10",
  f11: "F11",
  f12: "F12",
  numLock: "Verr. Num.",
  scrollLock: "Arrèst desfil.",
  semiColon: "Punt-virgula",
  equalSign: "Signe egal",
  comma: "Virgula",
  dash: "Jonhent",
  period: "Punt",
  forwardSlash: "Barra oblica",
  graveAccent: "Accent grèu",
  openBracket: "Parentèsi dobèrta",
  backSlash: "Barra oblica invèrsa",
  closeBracket: "Parentèsi tampanta",
  singleQuote: "Apostròfa"
});