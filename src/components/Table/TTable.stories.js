import TTable from "./TTable";
import {
    HeadCellsRestaurant, HeadCellsTicket,
    Restaurants, Brands
} from '../../storages/RestaurantStorage'

export default {
    component: TTable,
    title: 'T-Monitor/Components/TTable',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        cols: HeadCellsRestaurant,
        colsChild: [HeadCellsTicket],
        rows: Restaurants.map(res => ({
            ...res,
            active: res.active ? 'Online' : 'Offline',
            brand: `${Brands[res.brand].id}`,
            name: `${Brands[res.brand].name} ${res.name}`,
            details: {
                ...res.details,
                tickets: res.details.tickets.map(item => ({ ...item, status: item.status ? 'Done' : 'Pending' }))
            }
        })),
        rowsOrigin: Restaurants
    },
};