interface IPhotoAPI{
    fetchByID(ID: number) : Promise<Response>;
}

export default IPhotoAPI;