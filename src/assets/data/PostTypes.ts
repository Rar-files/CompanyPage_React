export interface IPostType{
    typeName: string;
    icnSrc: string;
}

export const PostTypes = [
    {
        typeName: "Corporate",
        icnSrc: "/media/icons/entities.svg",
    },
    {
        typeName: "Supplier contract",
        icnSrc: "/media/icons/publications.svg",
    },
    {
        typeName: "Client contract",
        icnSrc: "/media/icons/people.svg",
    }
]