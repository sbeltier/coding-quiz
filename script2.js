else if (secondsLeft < 0) {
                
    header_divMainBox.textContent = "You're out of time! Want to try again?"
    hideButtons();
       function hideButtons () {
           buttonArr.forEach(function (btn) {
            btn.className = "hide"
            }
        )
    var resetButton = document.createElement('button');
            divMainBox.appendChild(resetButton);
            resetButton.textContent = "Reset"
            resetButton.className = "answerButton"
        
        return;
       }
    }