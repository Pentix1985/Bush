const app = new Vue ({
    el: '.container',

    data: {
        message: 'Hellow Vue',
        now: new Date(),
    },

    methods: {

        updateDate() {
            this.now = new Date();
        },
    },

    mounted() {
        setInterval(() => {
            this.updateDate();
        }, 1000);
    },
});