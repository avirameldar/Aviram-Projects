function fullName(name, lastName) {
    this.name = name;
    this.last_name = lastName;

    this.fname = function () {
        console.log('Full Name:', this.name, this.last_name);
    }
}

const obj1 = new fullName('Noam', 'greenberg');
const obj2 = new fullName('Moshe', 'Cohen');

obj1.fname();
obj2.fname();


console.log('obj1', obj1);
console.log('obj2', obj2);

export default fullName;