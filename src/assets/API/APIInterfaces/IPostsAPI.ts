interface IPostsAPI{
    fetchByID(ID : number) : Promise<Response>;
    fetchAll() : Promise<Response>;
}

export default IPostsAPI;