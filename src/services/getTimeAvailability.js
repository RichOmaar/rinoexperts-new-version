import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/timeAvailability.controller.php';

export default function getTimeAvailability(values){
    return $.ajax({
        data: values,
        url: URL_API,
        type: 'POST',
        contentType: false,
        processData: false
    })
}