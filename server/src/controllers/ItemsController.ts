import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.9:3030/uploads/${item.image}`, // Alterar para localhost novamente ou ouutra rota
            }// Ajusta para http://192.168.0.20 quando for na palhoça.     
        });  // Ajusta para http://192.168.0.9 quando for na trindade.
        return response.json(serializedItems);    
    }
}
export default ItemsController;