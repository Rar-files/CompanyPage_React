interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const emptyPhoto = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
}

export default IPhoto;