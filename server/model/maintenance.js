const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
let timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
const { BeanModel } = require("redbean-node/dist/bean-model");

class Maintenance extends BeanModel {

    /**
     * Return an object that ready to parse to JSON for public
     * Only show necessary data to public
     * @returns {Object}
     */
    async toPublicJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            start_date: this.start_date,
            end_date: this.end_date,
            strategy: this.strategy,
            active: !!this.active,
        };
    }

    /**
     * Return an object that ready to parse to JSON
     * @returns {Object}
     */
    async toJSON() {
        return this.toPublicJSON();
    }
}

module.exports = Maintenance;
