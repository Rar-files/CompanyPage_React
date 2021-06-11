interface IUserAPI {
    fetchByID(ID: number) : Promise<Response>;
    fetchAll() : Promise<Response>;
}

export default IUserAPI;