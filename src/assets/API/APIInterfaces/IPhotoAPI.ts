interface IPhotoAPI{
    fetchByID(ID: number) : Promise<Response>;
    fetchAll() : Promise<Response>;
}

export default IPhotoAPI;