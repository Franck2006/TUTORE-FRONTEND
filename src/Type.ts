export namespace Type{
    export interface Project {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        technologies: string[];
        author: Author;
    }
}

export interface Author {
    image: string;
    name: string;
    lastname: string;
    project_link:string
}