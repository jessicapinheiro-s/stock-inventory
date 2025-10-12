import express from 'express';
import { 
    allUsers, 
    createUser, 
    deleteUser, 
    getUserByEmail, 
    getUserById, 
    updateUser 
} from '../../controllers/users/app.controller';

const routerUsers = express.Router();

routerUsers.get('/', allUsers);
routerUsers.post('/', createUser);
routerUsers.patch('/:id', updateUser);
routerUsers.delete('/:id', deleteUser);
routerUsers.get('/:id', getUserById)
routerUsers.get('/:email', getUserByEmail)