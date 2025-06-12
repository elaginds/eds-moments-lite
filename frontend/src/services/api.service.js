import axios from "axios";
import {Card} from "../classes/Card"

class ApiService {
    async getCards() {
        const testCards = [
            {
                id: 1,
                user_id: 1,
                name: 'NAME first',
                description: 'description',
                plan_days: 3,
                create_date: '2025-04-02'
            }, {
                id: 2,
                user_id: 1,
                name: 'Name two',
                description: 'description',
                plan_days: 2,
                create_date: '2025-04-01'
            }, {
                id: 3,
                user_id: 1,
                name: 'Name two',
                description: 'description',
                plan_days: 2,
                create_date: '2025-04-01'
            }, {
                id: 4,
                user_id: 1,
                name: 'Name two',
                description: 'description',
                plan_days: 2,
                create_date: '2025-04-01'
            }]

        try {
            await axios.get('http://localhost:8000/api/cards/');
            // return (testCards && testCards.length) ? testCards.map(tC => new Card(tC)) : [];
        } catch (e) {
            return (testCards && testCards.length) ? testCards.map(tC => new Card(tC)) : [];
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService();