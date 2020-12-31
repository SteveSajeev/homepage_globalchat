



var actionDOM = document.getElementById("action");
var index = 0;
var actions = ["Connect", "Chat", "Create", "Debate"]
function changeAction(DOM){
    currentAction = actions[index];
    if(index == actions.length-1){
        newAction = actions[0]
    }else {
        newAction = actions[index+1]
    }
    

    actionDOM.style.transform = "translate(0, -100%)";
    actionDOM.innerText = newAction;
    setTimeout(() => {
        actionDOM.style.transition = "transform none";
        actionDOM.style.transform = "translate(0, 100%)";

        setTimeout(() => {

        }, 100)
        actionDOM.style.transition = "transform 1s";
        actionDOM.style.transform = "translate(0, 0)"
    }, 1000)


    if(index < actions.length-1){
        index += 1;
    }else{
        index = 0;
    }
    
    setTimeout(changeAction, currentAction.length*300);
}

setTimeout(changeAction, 1000);