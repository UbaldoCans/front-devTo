const BASE_URL = "https://devto-backend-rested-swan-kl.mybluemix.net"

export default{
    async authenticate(data){
        let result = await fetch(`${BASE_URL}/auth/login`,{
            method: "POST",
            headers:{
                'Content-Type':'application/json'            },
            body: JSON.stringify(data)
        })
        return await result.json()
    },
    async getAllPosts(jwtToken){
        let result = await fetch(`${BASE_URL}/posts`,{
            headers:{
                'Authorization': jwtToken
            }
        })
        const resJson = await result.json()
        return resJson.data.allPosts
    },
    async getPostById(id, jwtToken){

        let result = await fetch(`${BASE_URL}/posts/${id}`,{
            headers:{
                'Authorization': jwtToken
            }
        })
        const resJson = await result.json()
        return resJson.data.getSinglePost
    },
    async createPost(data, jwtToken){

        let response = await fetch(`${BASE_URL}/posts`,{
            method: "POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization': jwtToken
            },
            body: JSON.stringify(data)
        })
        const resJson = await response.json()
        return resJson.data.posted

    },
    async updatePost(id, data, jwtToken){

        let response = await fetch(`${BASE_URL}/posts/${id}`,{
            method: "PATCH",
            headers:{
                'Content-Type':'application/json',
                'Authorization': jwtToken
            },
            body: JSON.stringify(data)
        })
        const resJson = await response.json()
        return resJson
    },
    async getCommentsByPostId(id, jwtToken){
        
        let result = await fetch(`${BASE_URL}/posts/${id}`,{
            headers:{
                'Authorization': jwtToken
            }
        })
        const resJson = await result.json()
        return resJson.data.getSinglePost.comments
    },
    async addComment(postId, data, jwtToken){
        // Add comment
        let response = await fetch(`${BASE_URL}/comments`,{
            method: "POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization': jwtToken
            },
            body: JSON.stringify(data)
        })
        const resJson = await response.json()
        const commentId = resJson.data.postedComment._id
        // Update post comments Array
        let postCommentsBatch = await this.getCommentsByPostId(postId, jwtToken)
        let postCommentsIds = postCommentsBatch.map(comment => comment._id ) 
        postCommentsIds.push(commentId)
        await this.updatePost(postId, {comments:postCommentsIds}, jwtToken)
        return postCommentsIds
    },
    async updateComment(id, data, jwtToken){

        let response = await fetch(`${BASE_URL}/comments/${id}`,{
            method: "PATCH",
            headers:{
                'Content-Type':'application/json',
                'Authorization': jwtToken
            },
            body: JSON.stringify(data)
        })
        const resJson = await response.json()
        return resJson
        
    },
    async authenticate(data){
       
        let response = await fetch(`${BASE_URL}/auth/login`,{
            method: "POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })
        const resJson = await response.json()
        return resJson

    },
    async getAllUsers(jwtToken){
        let result = await fetch(`${BASE_URL}/users`,{
            headers:{
                'Authorization': jwtToken
            }
        })
        const resJson = await result.json()
        return resJson.data.allUsers
    },
    async getUserById(id, jwtToken){

        let result = await fetch(`${BASE_URL}/users/${id}`,{
            headers:{
                'Authorization': jwtToken
            }
        })
        const resJson = await result.json()
        return resJson
    }
    
}