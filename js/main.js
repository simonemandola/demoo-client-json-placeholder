Vue.createApp({
    data() {
        return {
            API_URL_POST: "https://jsonplaceholder.typicode.com/posts",
            API_URL_USER: "https://jsonplaceholder.typicode.com/users",
            posts: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
            ],
            users: [],
            loading: true,
            pag: 1,
            maxElementsPag: 5,
            totalPage: 0,
        }
    },
    methods: {
        async getUsers() {
            const fetchUsers = await fetch(this.API_URL_USER);
            this.users = await fetchUsers.json();
        },
        async getNameUser(id) {
            return users[id].name;
        },
        getPostPag() {
            const postInicio = (this.pag - 1) * this.maxElementsPag;
            const postFinal = postInicio + this.maxElementsPag;
          return this.posts.slice(postInicio, postFinal);
        },
        nextPage() {
            this.pag = this.pag + 1;
        },
        prevPage() {
            this.pag = this.pag - 1;
        },
       async getPosts() {
            this.loading = true;
            const fetchPosts = await fetch(this.API_URL_POST);
            const jsonPosts = await fetchPosts.json();
            // Guardamos posts
            this.posts = jsonPosts;
            // Calculamos numero de paginas
            this.totalPages = Math.ceil(this.posts.length / this.maxElementsPag);
            this.loading = false;
       }
    },
    mounted() {
        this.getPosts();
        this.getUsers();
    },
}).mount('#app');