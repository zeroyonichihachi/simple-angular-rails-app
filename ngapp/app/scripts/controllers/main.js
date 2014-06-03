'use strict';

angular.module('notesApp')
.factory('Note', function ($resource) {
  return $resource('/api/notes/:noteId');
});

angular.module('notesApp')
.controller('MainCtrl', function ($scope, Note) {

  $scope.notes = Note.query();

  $scope.create = function(title, body) {
    Note.save({title: title, body: body}, function(note) {
      $scope.notes.push(note);
    });
  };

  $scope.delete = function(index) {
    Note.delete({noteId: $scope.notes[index].id}, function() {
      $scope.notes.splice(index, 1);
    });
  };

});

angular.module('notesApp')
.controller('ShowCtrl', function($scope, $routeParams, $location, Note){
  var note = Note.get({noteId: $routeParams.id}, function(){
    $scope.note = note;
  });

  $scope.delete = function(noteId) {
    Note.delete({noteId: noteId});
    $location.path("/notes");
  }
})
