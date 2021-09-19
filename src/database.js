import Dexie from "dexie";

export class Database extends Dexie {
    constructor() {
        super("database");

        this.version(1).stores({
            inventories: '++id,items,category,qty,desc',
            trans_in: '+id,date, item, qty, desc ',
            trans_out: '++id, date, *item, beneficiary, *qty, desc, update_at, status',
        })

        this.inventories = this.table('inventory');
        this.trans_in = this.table('trans_in');
        this.trans_out = this.table('trans_out');
    }


    //get inventory data
    async getInventories() {
        let inventories = [];

        inventories = await this.inventories.toArray();
        return inventories.map((i) => {
            i.done = !!i.done;
            return i;
        })
    }
}