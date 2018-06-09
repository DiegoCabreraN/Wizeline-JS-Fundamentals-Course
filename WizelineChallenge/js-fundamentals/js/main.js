// Notes list that is going to be shown in the browser
const notes = [{
  _id: NotesApp.createNoteId(),
  title: 'Note title goes here!',
  text: 'This is my very first note text! 😀',
}, {
  _id: NotesApp.createNoteId(),
  title: 'Second awesome note!',
  text: 'This is my second note text!',
}];

const addNewNote = NotesApp.addNewNote;

function getNoteById(_id) {
  return _id;
};

const updateNote = function(_id, title, text, index) {
  notes.forEach(function(val){
    if(val['_id'] === _id){
      console.log("Found");
    }
  });
};

// Declared functions
const insertNote = function(_id, title, text) {
  notes.push({
    _id: _id,
    title: title,
    text: text
  })
};

const saveNote = () => NotesApp.saveNote(function(_id, title, text) {
  let a = true;
  notes.forEach(function(val){
    if(val['_id'] === _id){
      val._id = _id;
      val.title = title;
      val.text = text;
      a = false;
    }
    console.log(notes);
    console.log('id: '+val['_id']);
  })

  if(a){
    notes.push(
      {
        _id: _id,
        title: title,
        text: text,
      }
    );
  }
  NotesApp.renderNotesList();
  //addNewNote();
});

const onClickNote = (event) => NotesApp.onClick(event, function(_id) {
  let title;
  let text;
  notes.forEach(function(val){
    if(val['_id']==_id){
        title = val['title'];
        text = val['text'];
    }
  });
  let note = {
      _id: _id,
      title: title,
      text: text,
  };
  NotesApp.renderNotesList();
  NotesApp.showNote(note);
});

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  NotesApp.renderNotesList();
});



console.log('You already imported your js file 😎');
