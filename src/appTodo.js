var inputText = document.getElementById('inputText');
var orderList = document.getElementById('list');
var btn = document.getElementById('buttonAdd');
var tempDatastorage ;


var database = firebase.database().ref('/');


// add logic 
function addTodoItem()
{
    var todo = 
    {
        text:inputText.value    
    }
    var textValue = inputText.value;
if(textValue=== '')
{
    alert('enter something in the box')
}
else
{
    database.child('todo').push(todo);
    

}
}
database.child('todo').on('child_added',function(snapshot){

var saveSnapshot = snapshot.val();
console.log(saveSnapshot)
saveSnapshot.id = snapshot.key;
render(saveSnapshot)  

}) 

function render(data)
{
    var textNode = document.createTextNode(data.text);
    var ListItem = document.createElement('li');
   ListItem.setAttribute('id',data.id)
    var deletebutton = document.createElement('img');
    deletebutton.src = 'images/delete.png';
    deletebutton.style.marginLeft = '7px';
    deletebutton.title = 'Delete';
    // deletebutton.setAttribute('onclick','removeTodo(data.id);')
    deletebutton.onclick=function(){
        removeTodo(data.id);
    }
   
   
    deletebutton.setAttribute('class','btnFloat')
    var editButton = document.createElement('img');
    editButton.src = 'images/edit.png';
    editButton.title = 'Edit';
    editButton.setAttribute('onclick','editNode(this.parentNode)');
    editButton.setAttribute('class','btnFloat')
    ListItem.appendChild(textNode); 
    ListItem.appendChild(deletebutton);
    ListItem.appendChild(editButton)
    orderList.appendChild(ListItem);
    inputText.value = '';}
   



// function deleteNode(getlist)
// {
//     orderList.removeChild(getlist);

// }

function removeTodo(key)
{

database.child('todo/'+key).remove();

}
database.child('todo').on("child_removed",function(data){
    
        var liToRemove=document.getElementById(data.key);
        console.log(liToRemove)
        console.log(data)
        console.log(liToRemove.remove())
        
    })
function editNode(parentText)
{
    tempDatastorage = parentText;
    age = parentText;
    console.log(parentText);
    inputText.value = parentText.childNodes[0].nodeValue;
    btn.src = 'images/tick.png';
    btn.title =  'save';
    btn.setAttribute('onclick','saveNode( inputText.value)')



}

function saveNode( updatedTextValue)
{
    tempDatastorage.childNodes[0].nodeValue = updatedTextValue; 
     btn.src = 'images/add.png';
      btn.title = 'Add'
     btn.setAttribute('onClick',"addTodoItem('inputText');");
     inputText.value = '';

}

// use for slider 
var myIndex = 0;
        carousel();

        function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 900);    
}

function textStyling()
{
    inputText.style.backgroundColor = '#39CCCC';
}

function textStylingRemove()
{
    inputText.style = 'reset';
}