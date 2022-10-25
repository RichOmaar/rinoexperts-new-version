import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/getAllServices.controller.php';

export default function getServices(values){
    return $.ajax({
        data: values,
        url: URL_API,
        type: 'GET'
    })
}