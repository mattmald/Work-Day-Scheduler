$('#currentDay').html(moment().format('llll'));

let store = localStorage.times ? JSON.parse(localStorage.times) : [];
renderMessage();

const hours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

hours.forEach((hour,i) => {
    let rowHour = i+9;
    let currentHour = moment().format('H');

    document.querySelector('.container').innerHTML += `
        <div class="row">
            <div class="hour">
                ${hour}
            </div>
            <textarea class = "${rowHour<currentHour ? 'past' : rowHour > currentHour ? 'future' : 'present'}"></textarea>
            <div class="saveBtn" data-hour = "${rowHour}">
                <i class="far fa-save"></i>
            </div>
        </div>`;
}); 

 var button = $(".saveBtn").on('click', saveText)
 
 function saveText() {
    store = [];
    for (let i = 0; i < $('textarea').length; i++) {
        store.push($('textarea').eq(i).val());   
    }
    localStorage.times = JSON.stringify(store);
    renderMessage();
 }

 function renderMessage() {
    store.forEach((val,i) => {
        $('textarea').eq(i).text(val)
    });
  }

  function init() {
    renderMessage();
  }
  init();
  
  
