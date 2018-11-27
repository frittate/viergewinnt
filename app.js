let data = {
    field_1 : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    checkboxes : [],
    field_1_win : [],
}

let control = {
    getElements: function(){
        for (let i=1;i<data.field_1.length+1;i++) {
            data.checkboxes[i] = document.getElementById(i);
        }
    },

    addEvents: function(){
        data.checkboxes.forEach(element => {
            element.addEventListener( 'change', function(event) {
                if(this.checked) {
                    event.target.disabled = 'true';
                    let _id =  event.target.id;
                    data.field_1_win[_id] = _id;     
                } 
                control.checkWinConditions();
            });
        });
        document.getElementById('btn_reset-1').addEventListener('click', function(){
            display.resetAll();
        })
    },

    checkWinConditions: function(){
        let condition_1 = data.field_1_win[1] && data.field_1_win[2] && data.field_1_win[3] && data.field_1_win[4];
        let condition_2 = data.field_1_win[5] && data.field_1_win[6] && data.field_1_win[7] && data.field_1_win[8];
        let condition_3 = data.field_1_win[9] && data.field_1_win[10] && data.field_1_win[11] && data.field_1_win[12];
        let condition_4 = data.field_1_win[13] && data.field_1_win[14] && data.field_1_win[15] && data.field_1_win[16];
        
        let condition_5 = data.field_1_win[1] && data.field_1_win[5] && data.field_1_win[9] && data.field_1_win[13];
        let condition_6 = data.field_1_win[2] && data.field_1_win[6] && data.field_1_win[10] && data.field_1_win[14];
        let condition_7 = data.field_1_win[3] && data.field_1_win[7] && data.field_1_win[11] && data.field_1_win[15];
        let condition_8 = data.field_1_win[4] && data.field_1_win[8] && data.field_1_win[12] && data.field_1_win[16];

        if(condition_1 || condition_2 || condition_3 || condition_4 || condition_5 || condition_6 || condition_7 || condition_8){
            document.getElementById('messages-1').innerHTML = 'Vier gewinnt!';
        }
    }
}

let display = {
    resetAll: function(){
        data.field_1_win = [];
        data.checkboxes.forEach(element => {
            element.disabled = false;
            element.checked = false;
        });
        document.getElementById('messages-1').innerHTML = ' ';
    }
}

control.getElements();
control.addEvents();