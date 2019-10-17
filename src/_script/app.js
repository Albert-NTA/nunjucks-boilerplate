'use strict';

import QueryDataSelector from "./modules/QueryDataSelector";

$(document).ready(function () {
  const queryDataSelector = new QueryDataSelector()
  queryDataSelector.load()

  CodeMirror.fromTextArea($('.js-codemirror').get(0), {
    mode: 'text/x-sql',
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    hintOptions: {
      tables: {
        users: ["name", "score", "birthDate"],
        countries: ["name", "population", "size"]
      }
    }
  });
})
