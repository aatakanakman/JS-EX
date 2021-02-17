
//Course Const
function Course(title, instructor, image) {

    this.title = title;
    this.instructor = instructor;
    this.image = image;

}

//UI Const
function UI() {

}
UI.prototype.addCourseToList = function (course) {

    const list = document.getElementById('course-list');

    var html = `
        <tr>
            <td><img src = "img/${course.image}"</td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href ="#"class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;
    list.innerHTML += html

}
UI.prototype.clearControls = function () {

    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";

}

UI.prototype.deleteCourse = function (element) {
    let ui = new UI;

    if (element.classList.contains('delete')) { // Class listesi içerisinde delete var ise 
        element.parentElement.parentElement.remove();
        ui.showAlert('The course has been deleted', 'danger')
    }
}
UI.prototype.showAlert = function (message, className) {

    var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `
    const row = document.querySelector('.row');
    //beforeBegin , afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin', alert);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000)
}

document.getElementById('new-course').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value
    const instructor = document.getElementById('instructor').value
    const image = document.getElementById('image').value

    //create course Object
    const course = new Course(title, instructor, image);

    // Create UI 
    const ui = new UI()

    if (title === '' || instructor === '' || image === '') {

        ui.showAlert('Please complate the form', 'warning');
    } else {
        //Add course to list
        ui.addCourseToList(course);

        // clear controls

        ui.clearControls();

        ui.showAlert('the course has been added', 'success')
    }
    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteCourse(e.target)



})

