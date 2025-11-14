import { db, pool } from '../server/db/db';
import * as schema from '../server/db/schema';
import { seed } from 'drizzle-seed';

const seedDb = async () => {
    await seed(db, schema, { count:100 } ).refine( (funcs) => ({
        todos: {
            columns: {
                title: funcs.valuesFromArray( {
                    values: ['Call Mum', 'Clean car', 'Go food shopping', 'Visit Dad', 'Fix leaking conservatory']
                }),
                description: funcs.valuesFromArray({
                    values: [ undefined, 'Needs to be done before 6pm', 'Must be done today', 'Can wait a while', 'Not sure what to do about this?' ]
                })
            }
        }
    }));
};

seedDb().then( () => {
    console.log('seeding the database successfully');
    return pool.end();
}).catch( (err) => {
    console.error(`failed to seed database:\n${err}`);
    return pool.end();
});