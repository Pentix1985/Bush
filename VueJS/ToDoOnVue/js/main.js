const container = new Vue ({
    el: '#container',

    data: {
        businessAffairs: [],
        businessTitle: '',
        businessText: '',
    },

    methods: {
        addBusiness() {
            let business = {
                title: this.businessTitle,
                desc: this.businessText,
                time: `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
            } 
            this.businessAffairs.push(business);
        }
    },
});