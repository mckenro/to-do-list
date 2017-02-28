//business logic
function toDo(itemTask, itemStartDate, itemStartTime) {
  this.itemTask=itemTask;
  this.itemStartDate=itemStartDate;
  this.itemStartTime=itemStartTime;
}
toDo.prototype.toDoTask = function () {
  return  "<li class= \"" + this.itemTask + "\" >" + "Task: " + this.itemTask +   "</li>" + "<li class= \"" + this.itemStartDate + "\">" + "Date: " + this.itemStartDate + "</li>" + "<li class= \"" + this.itemStartDate + "\">" + "Time: " + this.itemStartTime  + "</li>";
}




//ui logic
$(document).ready(function () {

  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    var userInput1 = $("input#item1").val();
    var userInput2 = $("input#item2").val();
    var userInput3 = $("input#item3").val();
    var newTask= new toDo(userInput1,userInput2,userInput3);
    $("#events").append(newTask.toDoTask());
    $("#events").addClass("listItem");
    $("." + newTask.itemTask).addClass("superTask");
    $("." + newTask.itemStartDate).addClass("dateStuff");
    $("li." + newTask.itemTask ).click(function(event){

      event.preventDefault();

      $("." + newTask.itemStartDate).toggle();

    });
  });

});
