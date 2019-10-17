export default class QueryDataSelector {
  load = () => {
    $('[data-js="true"]').hide();
    $('[data-js-default="true"]').show();
    if (location.search && location.search.length) {
      var queries = {};
      $.each(document.location.search.substr(1).split('&'), function (c, q) {
        var i = q.split('=');
        if (i[1] == null) {
          return;
        }
        queries[i[0].toString()] = i[1].toString();
        $('[data-js-default="true"]').hide();
        $($("[data-js-" + i[0] + "='" + i[1] + "']")).show();
      });
      dataQueries.push(queries)
      console.log(queries);

    }
  }
}