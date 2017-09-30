window.onload = function () {
  console.log('Finished loading!');
  let selected = {};
  $('INPUT[type=checkbox]').click(function () {
    $(this).each(function () {
      const _id = $(this)[0]['dataset']['id'];
      const _name = $(this)[0]['dataset']['name'];

      //  add
      if ($(this).is(':checked')) {  
        let string = '';
        selected[_id] = _name;
        for (i in selected) {
          string = string + selected[i];
          if (i != selected.length) {
            string = string + ', ';
          }
        }

        $('DIV.amenities h4').text(string);
      } else {
        // delete
        console.log('deleting....');
        delete selected[_id];       
      }
      let current = $('DIV.amenities h4').text();
      console.log('selected:');
      for (i in selected) {
        console.log(selected[i]);
      }
//      console.log(current);
    });
  });


//  $('INPUT[type=checkbox]').click(function () {w
 //   $(this).each (function () {
  //    if ($(this).is('checked')) {
   //     console.log('hi');
   //   }
  //  });
//  });
};
