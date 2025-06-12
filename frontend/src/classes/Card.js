import { Event } from './Event.js'

export class Card {
    constructor(c) {
        this.id = (c && c.id) ? c.id : null;
        this.user_id = (c && c.user_id) ? c.user_id : null;
        this.name = (c && c.name) ? c.name : '';
        this.description = (c && c.description) ? c.description : '';
        this.plan_days = (c && c.plan_days) ? c.plan_days : null;
        this.create_date = (c && c.create_date) ? c.create_date : null;

        this.events = (c && c.events && c.events.length) ? c.events.map(e => new Event(e)) : [];
    }
}