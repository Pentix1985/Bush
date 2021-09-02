Vue.component('business', {
    props: ['affairs'],
    template: `<div class="business">
                    <div class="business__task" 
                    v-for="task of affairs"
                    :key="task.time">
                        <span>{{task.time}}</span>
                        <details>
                            <summary>{{task.title}}<button>X</button></summary>
                            <p>{{task.desc}}</p>
                        </details>
                    </div>
                </div>`,
});