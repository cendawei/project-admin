beforeEach ->
  placeholder = $('<div id="graph" style="width: 600px; height: 400px"></div>')
  $('#index').append(placeholder)

afterEach ->
  $('#index').empty()
