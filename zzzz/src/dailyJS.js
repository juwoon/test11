//날짜
var now = new Date();
var year = now.getFullYear();
var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0'
    + (now.getMonth() + 1);
var day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
var today = year + '.' + mon + '.' + day;
// 로드
$(function() {
  $(window).on('load', function() {
    $.ajax({
      url : 'dailyServer.jsp',
      type : 'post',
      dataType : 'json',
      data : $(this).serialize(),
      success : successHandler
    });
    return false;
  }); // window on load

  function successHandler(data) {
    $('.addTr').empty();
    $('.addTd').empty();
    $.each(data, function(index, item) {
      var html = '<tr class="addTr">';
      html += '<td class="addTd" id = "contents">' + item.contents + '</td>';
      html += '<td class="addTd" id = "title">' + item.title + '</td>';
      html += '<td class="addTd" id = "writer">' + item.writer + '</td>';
      html += '<td class="addTd" id = "day">' + today + '</td>';
      html += '</tr>';

      $('#list').append(html);
    }); // each
  } // successHandler(data)

});

// 서브밋
$(function() {
  // alert(today);
  $('form').submit(function() {
    $.ajax({
      url : 'dailyServer.jsp',
      type : 'post',
      dataType : 'json',
      data : $(this).serialize(),
      success : successHandler
    });
    return false;
  }); // form.submit

  function successHandler(data) {
    $('.addTr').empty();
    $('.addTd').empty();
    $.each(data, function(index, item) {
      var html = '<tr class="addTr">';
      html += '<td class="addTd" class = "contents">' + item.contents + '</td>';
      html += '<td class="addTd" class = "title">' + item.title + '</td>';
      html += '<td class="addTd" class = "writer">' + item.writer + '</td>';
      html += '<td class="addTd" class = "day">' + today + '</td>';
      html += '</tr>';

      $('#list').append(html);
    }); // each
  } // successHandler(data)

});