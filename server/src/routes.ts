import express from 'express';
import ClassesControlers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesControlers(); 
const connectionController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;