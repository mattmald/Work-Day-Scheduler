$('#currentDay').html(moment().format('llll'));

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
            <div class="saveBtn">
                <i class="far fa-save"></i>
            </div>
        </div>
    `;

}); 

 var button = document.querySelector(".saveBtn")
 
 function saveText(event) {
    event.currentTarget.setAttribute(
        console.log("hello")
    );
 }

 button.addEventListener('click', saveText);