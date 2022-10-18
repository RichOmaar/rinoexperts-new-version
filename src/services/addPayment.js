import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/appointmentPayment.controller.php';

export default function addUserPayment(values){
    return $.ajax({
        data: values,
        url: URL_API,
        type: 'POST',
        contentType: false,
        processData: false
    })
}