import TTable from "./TTable";
import {
    HeadCellsRestaurant, HeadCellsTicket,
    Restaurants, Brands, HeadCellsInfo
} from '../../storages/RestaurantStorage'
import * as Utils from '../../utils'

export default {
    component: TTable,
    title: 'T-Monitor/Components/TTable',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        cols: HeadCellsRestaurant,
        colsChild: [HeadCellsInfo, HeadCellsTicket],
        rows: Restaurants.map(res => ({
            ...res,
            brand: `${Brands[res.brand].id}`,
            name: `${Brands[res.brand].name} ${res.name}`,
            details: {
                ...res.details,
                info: {
                    ...res.details.info,
                    phone: Utils.formatPhoneNumber(res.details.info.phone)
                }
            }
        })),
        rowsPerPageInit: 10,
        rowsPerPageOptions: [
            10, 15, 25,
            {
                label: 'All',
                value: -1
            }
        ]
    },
};