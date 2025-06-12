/*------------------------- JS Code By Nirav ----------------------------*/



//#Note - Here we will use oops concept to collect form input data..particular we will use hera Hierarchical Inheritance...



const submitData = document.querySelector('#submitData')


submitData.addEventListener('submit', (e) => {

    // console.log(e.target) //for testing purpuse to see to whome it targets..

    e.preventDefault();

    //Here we are creating class inside a function....

    class Common {

        constructor(who, name, mobile) {
            this.who = who
            this.name = name
            this.mobile = mobile
        }

    }


    class Student extends Common {

        constructor(who, name, mobile, grid) {
            super(who, name, mobile)
            this.grid = grid
        }

        getDetails() {
            document.querySelectorAll('.displaydetail')[0].innerText = this.name;
            document.querySelectorAll('.displaydetail')[1].innerText = this.mobile;
            document.querySelectorAll('.displaydetail')[2].innerText = this.grid;
        }

    }

    class Parent extends Common {
        constructor(who, name, mobile, relation) {
            super(who, name, mobile)
            this.relation = relation
        }

        getDetails() {
            document.querySelectorAll('.displaydetail')[3].innerText = this.name;
            document.querySelectorAll('.displaydetail')[4].innerText = this.mobile;
            document.querySelectorAll('.displaydetail')[5].innerText = this.relation;
        }
    }



    const showdetails = document.querySelectorAll('.showdetails')

    let std1 = new Student("Student", showdetails[0].value, showdetails[1].value, showdetails[2].value)

    std1.getDetails()


    let p1 = new Parent("Parent", showdetails[3].value, showdetails[4].value, showdetails[5].value)

    p1.getDetails()



})



