export class Event {
    constructor(e) {
        this.id = (e && e.id) ? e.id : null;
        this.description = (e && e.description) ? e.description : '';
    }
}