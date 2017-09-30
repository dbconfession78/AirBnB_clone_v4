window.onload = function () {
  console.log('Finished loading!');
  let selected = {};
  $('INPUT[type=checkbox]').click(function () {
    $(this).each(function () {
      const _id = $(this)[0]['dataset']['id'];
      const _name = $(this)[0]['dataset']['name'];

      //  add
      if ($(this).is(':checked')) {
        selected[_id] = _name;
      } else {
        // delete
        delete selected[_id];
      }
      let string = '';
      for (let i in selected) {
        string = string + selected[i];
        if (i !== selected.length) {
          string = string + ', ';
        }
      }
      $('DIV.amenities h4').text(string);
    });
  });
};
