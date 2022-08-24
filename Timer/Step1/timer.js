const fullName = {
    name: 'Aviram',
    Last_name: 'Eldar',
    fname: function () {
        console.log('My full name', this.name, this.Last_name);
    },
};

fullName.fname();

export default fullName;