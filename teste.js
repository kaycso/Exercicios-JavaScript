const obj = {
    name: "JavaScript",
    showName: function() {
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 1000);
    }
};

obj.showName();