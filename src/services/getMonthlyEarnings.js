import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/monthlyEarnings.controller.php';

export default function getEarningsByMonth(){
    return $.ajax({
        url: URL_API,
        type: 'GET',
    })
}