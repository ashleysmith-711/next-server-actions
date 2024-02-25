"use server"

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const createPetAction = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const age = formData.get('age') as string;
    const breed = formData.get('breed') as string;
    const description = formData.get('description') as string;


    try {
        await prisma.pet.create({ 
            data: { 
                    name, 
                    age: Number(age), 
                    breed, 
                    description 
            }});

        revalidatePath('/');
    } catch (e) {
        return {
            error: e
        }
    }
}

export const petAdoptedAction = async (formData: FormData) => {
    try {
        const dogId = formData.get('id') as string;
        await delay(2000)
        // throw new Error();
        await prisma.pet.update({
            where: {
                id: Number(dogId)
            },
            data: {
                adopted: true
            }
        });
        revalidatePath('/')
    } catch (e) {
        return {
            error: e
        }
    }
}

export const removePetAction = async (formData: FormData) => {
    const dogId = formData.get('id') as string;
    const removedPet = await prisma.pet.delete({
        where: {
            id: Number(dogId)
        }
    });
    revalidatePath('/')
    return removedPet;
}