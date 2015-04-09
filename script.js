(function(){

  var count = 0;
  var $container = $('#container');
  var $ace = $('<div></div>').attr('id', 'ace');
  var $editor  = $('<div></div>')
    .attr('id', 'editor')
    .append($ace);


  var addEditor = function(e){
      console.log('addEditor');
      e.preventDefault();

      var $content = $('#content');

      $content.remove();

      $container.append($editor);

      var editor = ace.edit('ace');
      editor.getSession().setMode('ace/mode/html');
      editor.setOptions({
        minLines: 1,
        maxLines: 1,
        showGutter: false,
        readOnly: false,
        fontSize: '16px',
        theme: 'ace/theme/eclipse'
      });

      $('.ace_text-input').focus();

      $('#editor')
      .on('mouseleave', function(e){
        e.preventDefault();
        console.log('run for blur');
        var text = editor.getSession().getValue();
        console.log('text: '+ text);

        $editor.remove();
        addContent(text);
      })
      .keypress(function(e) {
        if(e.which == 13) {
          e.preventDefault();
          console.log('You pressed enter!');
        }
      });
  };

  var addContent = function(text){
    console.log('addContent');
    var $content = $('<div></div>')
    .attr('id', 'content')
    .html(text)
    .on('dblclick', addEditor);

    $container.append($content);
    console.log(count++);
  };

  addContent('');

}());
