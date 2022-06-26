import $ from 'jquery';
import config from '../config';
const URL_API = config.urlApi+'controllers/validateTimeSelected.controller.php';

export default function validateTimeSelected(values){
    for (const value of values.values()) {
        console.log(value);
      }
    return $.ajax({
        data: values,
        url: URL_API,
        type: 'POST',
        contentType: false,
        processData: false
    })
}