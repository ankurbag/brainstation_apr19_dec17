// A journal is a collection of entries

// Entry Object
function Entry(title, content, author) {
  // Initialization
  this.title = title;
  this.content = content;
  this.author = author;
  this.likes = 0;

  // Methods
  this.displayEntry = function () {
    console.log(
      `Entry Name: ${this.title} | Content: ${this.content} | Author : ${this.author}`
    );
  };

  this.addLike = function() {
    this.likes++;
  }
}

// Test Entry Object
//const entry1 = new Entry('My Entry 1', 'This is a Test', 'Ankur');
//entry1.displayEntry();

// Journaal Object
function Journal(name, entries) {
  // Initialization
  this.name = name;
  this.entries = [];

  // Methods
  this.addEntry = function (title, content, author) {
    let entryObj = new Entry(title, content, author);
    this.entries.push(entryObj);
  };

  this.displayEntries = function() {
    if(this.entries.length === 0)
      console.log('Sorry No entry found!');
    // console.log(this.entries);
    for(let i = 0; i<this.entries.length; i++){
      this.entries[i].displayEntry();
    }
  };

  this.deleteEntries = function(index) {
    this.entries.splice(index, 1);
  }

}

// Test the system
const journalApp = new Journal('My Brainstation journal');
journalApp.addEntry('Entry 1', 'This is a test entry 1', 'Kaushal');
journalApp.addEntry('Entry 2', 'This is a test entry 2', 'Caitlin');
journalApp.addEntry('Entry 3', 'This is a test entry 3', 'Paul');

console.log("Before:::::");
journalApp.displayEntries();
journalApp.deleteEntries(2);
console.log("After:::::");
journalApp.displayEntries();

