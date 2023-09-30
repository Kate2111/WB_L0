import data from '../../db.json';
import cartItem from './modules/cartItem';
import absenceItem from './modules/absenceItem';
import accordion from './modules/accordion';
import getCountProduct from './modules/counter';
import {getTotalValue, getTotalSale } from './modules/amount';
import pay from './modules/payNow';
import modal from './modules/modal';
import {getInfo, getInfoDelivery} from './modules/info';
 

document.addEventListener('DOMContentLoaded', function () {
    cartItem(data);
    absenceItem(data);
    accordion('.button__close', '.basket__list');
    getCountProduct();
    getTotalValue ('#total_price', '.total [data-price]','data-price');
    getTotalValue ('#old_price', '.total [data-sale]', 'data-sale');
    getTotalSale('#total_price', '#old_price', '#sale')
    pay();
    modal('[data-delivery]', '#modal-delivery');
    modal('[data-pay]', '#modal-pay');
    getInfo();
    getInfoDelivery();
})

