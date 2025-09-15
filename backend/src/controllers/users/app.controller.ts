import { prisma } from "../../models";
import { ReqType } from "../../types/req";


const deleteUser = async (req: ReqType, res: any) => {
    const {
        id
    } = req.body;
    try {
        const userCreated = await prisma.users.delete({
            where: {
                id: id
            }
        });
        res.status(201).json(userCreated);
    } catch (error) {
        console.error('[GET] Error deleting the user:', (error instanceof Error) ? error.message : error);
        res.status(500).json({ error: 'Failed to delete the user' });
    }
}
const createUser = async (req: ReqType, res: any) => {
    const {
        name,
        email,
        password
    } = req.body;
    try {
        const userCreated = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
        res.status(201).json(userCreated);
    } catch (error) {
        console.error('[GET] Error creating user:', (error instanceof Error) ? error.message : error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}
const updateUser = async (req: ReqType, res: any) => {
    const {
        name,
        email,
        password
    } = req.body;

    const {
        id
    } = req.params;

    try {
        const userCreated = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
        res.status(201).json(userCreated);
    } catch (error) {
        console.error('[GET] Error creating user:', (error instanceof Error) ? error.message : error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

const getUserByEmail = async (req: ReqType, res: any) => {
    const {
        email
    } = req.params;

    try {
        const userByEmail = await prisma.users.findUnique({
            where: {
                email: email
            }
        });
        res.status(201).json(userByEmail);
    } catch (error) {
        console.error('[GET] Error geting the user:', (error instanceof Error) ? error.message : error);
        res.status(404).json({ error: 'User not found' });
    }
}

const getUserById = async (req: ReqType, res: any) => {
    const {
        id
    } = req.params;

    try {
        const userById = await prisma.users.findUnique({
            where: {
                id: id
            }
        });
        res.status(201).json(userById);
    } catch (error) {
        console.error('[GET] Error geting the user:', (error instanceof Error) ? error.message : error);
        res.status(404).json({ error: 'User not found' });
    }
}

const allUsers = async (require: ReqType, res: any) => {
    try {
        const getAllUsers = await prisma.users.findMany();
        res.status(201).json(getAllUsers);
    } catch (error) {
        console.error('[GET] Error creating user:', (error instanceof Error) ? error.message : error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}
