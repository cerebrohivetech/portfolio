import { StaticImageData } from "next/image";


const ProfileImage = "/images/profile.png"

let nextId = 0;
type Testimony = {
    id: number;
    description: string;
    image: string | StaticImageData;
    name: string;
};
export const Testimonials: Testimony[] = [
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
    {
        id: nextId++,
        description:
            "Lorem ipsum dolor sit amet consectetur. Eget consectetur sem volutpat felis. ",
        image: ProfileImage,
        name: "Name",
    },
];
