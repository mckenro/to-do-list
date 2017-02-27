//business logic
function toDo(itemTask, itemStartDate, itemStartTime) {
  this.itemTask=itemTask;
  this.itemStartDate=itemStartDate;
  this.itemStartTime=itemStartTime;
}
toDo.prototype.toDoTask = function () {
  return  "<li class= \"" + this.itemTask + "\" >" +"<span class='caret'></span>" + "Task: " + this.itemTask +   "</li>" + "<li>" + "Date: " + this.itemStartDate + "</li>" + "<li>" + "Time: " + this.itemStartTime  + "</li>";
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

    $("li." + newTask.itemTask ).click(function(event){
      event.preventDefault();
    $("." + newTask.itemTask ).toggleClass("done");
    });
  });

});
