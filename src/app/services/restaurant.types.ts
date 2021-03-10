export interface IResturantMenu {
    name: string;
    items:{
        name: string;
        price: number;
    }[];       
}

export interface IResturant {
    name: string;
    _id?: string;
    telephone: string;
    address: string;
    image: string;
    menu?: IResturantMenu;
}